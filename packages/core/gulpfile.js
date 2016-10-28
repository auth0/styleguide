var gulp = require('gulp');
var stylus = require('gulp-stylus');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

var styleFiles = ['./src/main.styl'];

gulp.task('styles', function() {
  return gulp.src(styleFiles)
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssnano())
    .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
  gulp.watch(styleFiles, ['styles']);
});

gulp.task('default', ['watch']);
