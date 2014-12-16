var pkg = require('./package');

var minorVersion = pkg.version.replace(/\.(\d)*$/, '');
var majorVersion = pkg.version.replace(/\.(\d)*\.(\d)*$/, '');
var path = require('path');
var join = path.join;
var fs = require('fs');
var read = fs.readFileSync;

module.exports = function (grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    connect: {
      dev: {
        options: {
          hostname: '*',
          port: 8989,
          middleware: function (connect, options) {
            return [connect.static(__dirname) ];
          }
        }
      },
    },
    watch: {
      dev: {
        files: ['*', 'lib/**/*'],
        tasks: ["shell:component_install", "shell:component_build"]
      }
    },
    clean: [
      'release/'
    ],
    shell: {
      generate_index: {
        command: './node_modules/.bin/jade index.jade'
      },
      component_install: {
        command: './node_modules/.bin/component-install'
      },
      component_install_dev: {
        command: './node_modules/.bin/component-install --dev'
      },
      component_build: {
        command: './node_modules/.bin/component-build --use component-stylus,component-jade'
      },
      component_build_dev: {
        command: './node_modules/.bin/component-build --dev --use component-stylus,component-jade'
      },
      component_build_release: {
        command: [
          './node_modules/.bin/component-build --use component-stylus,component-jade --out release',
          './node_modules/.bin/component-build --use component-stylus,component-jade,component-minify --out release --name build.min',
          './node_modules/.bin/component-build --use component-stylus,component-jade --out release --standalone Styleguide --name standalone',
          './node_modules/.bin/component-build --use component-stylus,component-jade,component-minify --out release --standalone Styleguide --name standalone.min'
        ].join(' && ')
      }
    },

    s3: {
      options: {
        key:    process.env.S3_KEY,
        secret: process.env.S3_SECRET,
        bucket: process.env.S3_BUCKET,
        access: 'public-read',
        headers: {
          'Cache-Control':  'public, max-age=300'
        }
      },
      publish: {
        upload: [{
          rel:    'release',
          src:    'release/**/*',
          dest:   'styleguide/' + pkg.version + '/',
          options: { gzip: false }
        }, {
          rel:    'release',
          src:    'release/*',
          dest:   'styleguide/latest/',
          options: { gzip: false }
        }]
      }
    }
  });

  grunt.registerTask('dev', ['shell:generate_index', 'shell:component_install_dev', 'shell:component_build_dev', 'connect', 'watch']);
  grunt.registerTask('build', ['clean', 'shell:component_install', 'shell:component_build_release']);
  grunt.registerTask('cdn', ['build', 's3']);
  grunt.registerTask('default', ['build']);
};
