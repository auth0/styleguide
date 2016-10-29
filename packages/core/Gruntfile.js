// TODO: Deprecate this grunt task
// Develop the gulp version, using gulp-awspublish

const pkg = require('./package');

const pkgShortName = 'core'; // TODO: get this name from the folder name
const buildFolder = 'build/';
const cdnFolder = `styleguide-${pkgShortName}`;

module.exports = grunt => {
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    shell: {
      purge_cdn: {
        command: [
          `curl -X DELETE https://cdn.auth0.com/${cdnFolder}/latest`,
          `curl -X DELETE https://cdn.auth0.com/${cdnFolder}/${pkg.version}`
        ].join(' && ')
      }
    },

    aws_s3: {
      options: {
        key: process.env.S3_KEY,
        secret: process.env.S3_SECRET,
        bucket: process.env.S3_BUCKET,
        region: process.env.S3_REGION,
        access: 'public-read',
        headers: {
          'Cache-Control': 'public, max-age=300'
        }
      },
      clean: {
        files: [
          { action: 'delete', dest: `${cdnFolder}/${pkg.version}/${pkgShortName}.css` },
          { action: 'delete', dest: `${cdnFolder}/${pkg.version}/${pkgShortName}.min.css` },
          { action: 'delete', dest: `${cdnFolder}/latest/${pkgShortName}.css` },
          { action: 'delete', dest: `${cdnFolder}/latest/${pkgShortName}.min.css` }
        ]
      },
      publish: {
        files: [{
          expand: true,
          cwd: buildFolder,
          src: ['**'],
          dest: `${cdnFolder}/${pkg.version}/`
        }, {
          expand: true,
          cwd: buildFolder,
          src: ['**'],
          dest: `${cdnFolder}/latest/`
        }]
      }
    }
  });

  grunt.registerTask('cdn', ['aws_s3', 'shell:purge_cdn']);
  grunt.registerTask('default', ['cdn']);
};
