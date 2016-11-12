const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const path = require('path');

/**
 * CSS bundle task
 */
gulp.task('styles', () =>
  gulp.src('./src/index.styl')
    .pipe($.stylus({
      'include css': true,
      paths: [path.resolve(__dirname, 'node_modules')]
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // Unminified CSS bundle
    .pipe($.rename('react-components.css'))
    .pipe(gulp.dest('./build/'))
    // Minified CSS bundle
    .pipe($.cssnano())
    .pipe($.rename('react-components.min.css'))
    .pipe(gulp.dest('./build/'))
);

/**
 * Build task
 */
gulp.task('build', gulp.series('styles'));

/**
 * Watch task
 */
gulp.task('watch', gulp.series(done => {
  gulp.watch('./src/**/*.styl', gulp.series('build'));
  done();
}));

/**
 * Default task
 */
gulp.task('default', gulp.series('watch'));
