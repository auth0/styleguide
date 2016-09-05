const gulp = require('gulp');
const server = require('gulp-server-livereload');
const jade = require('gulp-jade');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const ejs = require('gulp-ejs');
const mjmlCompile = require('gulp-mjml');
const mjml = require('mjml');
const prettify = require('gulp-html-prettify');
const $ = require('gulp-load-plugins')();
const webpack = require('webpack-stream');

gulp.task('server', ['build'], function() {
  return gulp.src('./build/')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('webpack', function() {
  return gulp.src('./index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('build/'));
});

/**
 * Copy necessary files
 */
gulp.task('copy', ['copy:landing-js', 'copy:landing-package']);

// Copy lib files and make lossless compression of images
gulp.task('compress:images', () => {
  const onlyImages = $.filter('**/*.+(png|jpg|jpeg|gif)', { restore: true });

  return gulp.src('./lib/**/*.*')
    .pipe(onlyImages)
    .pipe($.imagemin({
      verbose: true
    }))
    .pipe(onlyImages.restore)
    .pipe(gulp.dest('./build/lib/'));
});

// Copy package.json for landing
gulp.task('copy:landing-package', () =>
  gulp.src('./package.json')
    .pipe(gulp.dest('./build/landing/'))
);

// Copy landing JavaScript files
gulp.task('copy:landing-js', () =>
  gulp.src('./landing/**/*.js')
    .pipe(gulp.dest('./build/landing/'))
);

gulp.task('stylus-landing', function() {
  return gulp.src('./landing/styles/*.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      'include css': true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/'))
});

gulp.task('stylus-lib', function() {
  return gulp.src('index.styl')
    .pipe(sourcemaps.init())
    .pipe(stylus({
      'include css': true
    }))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./build/'))
});

gulp.task('jade-lib', function() {
  return gulp.src('./lib/**/*.jade')
    .pipe(jade({
      pretty: true
    }))
    .pipe(gulp.dest('./build/landing/html/'))
});

gulp.task('jade-landing', ['emails', 'jade-lib'], function() {
  var styleguideVersion = require('./package.json').version;

  gulp.src('./lib/**/*.jade')
    .pipe(jade({
      pretty: true,
      locals: {
        version: styleguideVersion
      }
    }))
    .pipe(gulp.dest('./build/lib/'))

  gulp.src('./landing/index.jade')
    .pipe(jade({
      pretty: true,
      locals: {
        version: styleguideVersion
      }
    }))
    .pipe(gulp.dest('./build/'))
  return gulp.src('./landing/stage/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./build/stage/'))
});

gulp.task('cssmin', ['stylus-lib', 'stylus-landing'], function() {
  return gulp.src(['build/**/*.css', '!build/**/*.min.css'])
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('build'))
});

gulp.task('ejs', ['copy'], function () {
  return gulp.src(['lib/emails/**/*.ejs'])
    .pipe(ejs())
    .pipe(prettify({
      indent_char: ' ',
      indent_size: 2
    }))
    .pipe(gulp.dest('build/lib/emails/'))
});

gulp.task('mjml', ['ejs'], function () {
  return gulp.src(['build/lib/emails/**/*.ejs', '!build/lib/emails/_modules/*.ejs'])
    .pipe(mjmlCompile(mjml))
    .pipe(gulp.dest('build/lib/emails/'))
});

gulp.task('watch', function() {
  gulp.watch(['./lib/**/*.ejs'], ['emails', 'jade-landing']);
  gulp.watch(['./lib/**/*.jade'], ['templates', 'copy']);
  gulp.watch(['./landing/**/*.jade', './landing/**/*.js'], ['jade-landing', 'copy']);
  gulp.watch(['./lib/**/*.styl'], ['css']);
  gulp.watch(['./landing/**/*.styl'], ['css']);
  gulp.watch(['./lib/**/*.styl', './lib/**/*.js', './index.js'], ['webpack']);
});

gulp.task('emails', ['ejs', 'mjml']);
gulp.task('templates', ['jade-landing', 'jade-lib', 'emails']);
gulp.task('stylus', ['stylus-landing', 'stylus-lib']);
gulp.task('css', ['stylus', 'cssmin']);

gulp.task('build', ['webpack', 'css', 'templates', 'copy']);
gulp.task('build:prod', ['webpack', 'css', 'templates', 'copy', 'compress:images']);
gulp.task('default', ['server', 'build', 'watch']);
