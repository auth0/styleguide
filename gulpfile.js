const gulp = require('gulp');
const server = require('gulp-server-livereload');
const jade = require('gulp-jade');
const stylus = require('gulp-stylus');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');

gulp.task('server', ['build'], function() {
  return gulp.src('./build/')
    .pipe(server({
      livereload: true,
      open: true
    }));
});

gulp.task('copy', function() {
    gulp.src('./landing/**/*.js')
      .pipe(gulp.dest('./build/landing/'));
    return gulp.src('./lib/**/*.*')
      .pipe(gulp.dest('./build/lib/'));
});

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

gulp.task('jade-landing', function() {
  gulp.src('./landing/index.jade')
    .pipe(jade({
      pretty: true
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

gulp.task('watch', function() {
  gulp.watch(['./lib/**/*.jade'], ['templates', 'copy']);
  gulp.watch(['./landing/**/*.jade', './landing/**/*.js'], ['jade-landing', 'copy']);
  gulp.watch(['./lib/**/*.styl'], ['css']);
  gulp.watch(['./landing/**/*.styl'], ['css']);
});

gulp.task('templates', ['jade-landing', 'jade-lib']);
gulp.task('stylus', ['stylus-landing', 'stylus-lib']);
gulp.task('css', ['stylus', 'cssmin']);

gulp.task('build', ['css', 'templates', 'copy']);
gulp.task('default', ['server', 'build', 'watch']);
