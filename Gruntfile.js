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
          port: 8989,
          middleware: function (connect, options) {
            return [connect.static(join(__dirname, 'build')) ];
          }
        }
      },
    },
    watch: {
      dev: {
        files: ['*', 'lib/**/*', 'bin/**/*', 'landing/*'],
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
        command: './node_modules/.bin/stylus --include-css --include . --resolve-url --out build/ landing/landing.styl'
      },
      purge_cdn_latest: {
        command: 'curl -X DELETE https://cdn.auth0.com/styleguide/latest'
      },
      purge_cdn_major: {
        command: 'curl -X DELETE https://cdn.auth0.com/styleguide/styleguide/' + majorVersion
      },
      purge_cdn_minor: {
        command: 'curl -X DELETE https://cdn.auth0.com/styleguide/styleguide/' + minorVersion
      }
    },
    copy: {
      main: {
        files: [
          { expand: true, src: ['lib/**/*', '!**/*.styl', '!**/*.jade'], dest: 'build', filter: 'isFile'}
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
        access: 'public-read',
        params: {
          CacheControl: 'public, max-age=300'
        }
      },
      publish: {
        files: [
        {
          rel:    'build',
          src:    'build/**/*',
          dest:   'styleguide/' + majorVersion  + '/',
          options: {
            params: {
              gzip: false
            }
          },
          action: 'upload'
        },
        {
          rel:    'build',
          src:    'build/**/*',
          dest:   'styleguide/' + minorVersion + '/',
          options: {
            params: {
              gzip: false
            }
          },

          action: 'upload'
        },
        {
          rel:    'build',
          src:    'build/**/*',
          dest:   'styleguide/' + pkg.version + '/',
          options: {
            params: {
              gzip: false
            }
          },
          action: 'upload'
        },
        {
          rel:    'build',
          src:    'build/**/*',
          dest:   'styleguide/latest/',
          options: {
            params: {
              gzip: false
            }
          },

          action: 'upload'
        }]
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
    'shell:purge_cdn_latest',
    'shell:purge_cdn_major',
    'shell:purge_cdn_minor'
  ]);

  grunt.registerTask('default', ['build']);
};
