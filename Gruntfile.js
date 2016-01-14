var pkg = require('./package');

var minorVersion = pkg.version.replace(/\.(\d)*$/, '');
var majorVersion = pkg.version.replace(/\.(\d)*\.(\d)*$/, '');

var path = require('path');
var join = path.join;

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    connect: {
      dev: {
        options: {
          hostname: '*',
          port: 8888,
          middleware: function (connect, options) {
            return [connect.static(join(__dirname, 'build')) ];
          }
        }
      },
    },
    watch: {
      dev: {
        files: ['*', 'lib/**/*', 'bin/**/*', 'landing/**/*'],
        tasks: ["build"]
      }
    },
    clean: [
      'build/'
    ],
    shell: {
      fix_utf8: {
        command: './bin/fix-utf8-problem lib/budicon/budicon.css lib/budicon/budicon.fixed.css'
      },
      generate_index: {
        command: './node_modules/.bin/jade landing/index.jade -O package.json --out build/'
      },
      generate_css: {
        command: './node_modules/.bin/stylus --include-css --include . --resolve-url --out build/ index.styl'
      },
      generate_demo_css: {
        command: './node_modules/.bin/stylus --include-css --include . --resolve-url --out build/ landing/styles/landing.styl'
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, src: ['lib/**/*', '!**/*.styl', '!**/*.jade', 'landing/index.js'], dest: 'build', filter: 'isFile'}
        ]
      }
    },
    cssmin: {
      main: {
        files: {
          'build/index.min.css': ['build/index.css']
        }
      }
    },
    aws_s3: {
      options: {
        accessKeyId:  process.env.S3_KEY,
        secretAccessKey: process.env.S3_SECRET,
        bucket: process.env.S3_BUCKET,
        region: process.env.S3_REGION,
        uploadConcurrency: 5,
        params: {
          CacheControl: 'public, max-age=300'
        }
      },
      publish: {
        files: [{
          src: ['**'],
          dest: 'styleguide/' + majorVersion  + '/',
          expand: true,
          cwd: 'build/'
        },{
          src: ['**'],
          dest: 'styleguide/' + minorVersion + '/',
          expand: true,
          cwd: 'build/'
        },{
          src: ['**'],
          dest: 'styleguide/' + pkg.version + '/',
          expand: true,
          cwd: 'build/'
        },{
          src: ['**'],
          dest: 'styleguide/latest/',
          expand: true,
          cwd: 'build/'
        }]
      }
    },
    http: {
      purge_cdn_latest: {
        options: {
          url: process.env.CDN_ROOT + '/styleguide/latest',
          method: 'DELETE'
        }
      },
      purge_cdn_major: {
        options: {
          url: process.env.CDN_ROOT + '/styleguide/styleguide/' + majorVersion,
          method: 'DELETE'
        }
      },
      purge_cdn_minor: {
        options: {
          url: process.env.CDN_ROOT + '/styleguide/styleguide/' + minorVersion,
          method: 'DELETE'
        }
      }
    }
  });

  grunt.registerTask('build', [
    'clean',
    'shell:fix_utf8',
    'shell:generate_index',
    'shell:generate_css',
    'shell:generate_demo_css',
    'cssmin:main',
    'copy:main',
  ]);

  grunt.registerTask('dev', ['build', 'connect', 'watch']);

  grunt.registerTask('cdn', [
    'build',
    'aws_s3',
    'http:purge_cdn_latest',
    'http:purge_cdn_major',
    'http:purge_cdn_minor'
  ]);

  grunt.registerTask('default', ['build']);
};
