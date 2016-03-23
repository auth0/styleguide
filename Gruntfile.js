var pkg = require('./package');

var minorVersion = pkg.version.replace(/\.(\d)*$/, '');
var majorVersion = pkg.version.replace(/\.(\d)*\.(\d)*$/, '');

var path = require('path');
var join = path.join;

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    clean: [
      'build/'
    ],
    shell: {
      fix_utf8: {
        command: './bin/fix-utf8-problem lib/budicon/budicon.css lib/budicon/budicon.fixed.css'
      },
      gulp: {
        command: './node_modules/.bin/gulp build'
      },
      gulp_dev: {
        command: './node_modules/.bin/gulp'
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
      purge_styleguide: {
        options: {
          url: process.env.STYLEGUIDE_ROOT + '/*',
          method: 'DELETE'
        }
      },
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
    'shell:gulp'
  ]);

  grunt.registerTask('dev', [
    'clean',
    'shell:fix_utf8',
    'shell:gulp_dev'
  ]);

  grunt.registerTask('cdn', [
    'build',
    'aws_s3',
    'http:purge_styleguide',
    'http:purge_cdn_latest',
    'http:purge_cdn_major',
    'http:purge_cdn_minor'
  ]);

  grunt.registerTask('default', ['build']);
};
