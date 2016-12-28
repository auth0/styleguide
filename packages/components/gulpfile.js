const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

/**
 * CSS bundle task
 */
gulp.task('styles', () =>
  gulp.src('./src/main.styl')
    .pipe($.stylus({
      'include css': true
    }))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    // Unminified CSS bundle
    .pipe($.rename('components.css'))
    .pipe(gulp.dest('./build/'))
    // Minified CSS bundle
    .pipe($.cssnano())
    .pipe($.rename('components.min.css'))
    .pipe(gulp.dest('./build/'))
);

/**
 * Emails task
 */
gulp.task('emails', () =>
  gulp.src(['./src/emails/**/*.ejs', '!./src/emails/_modules/*.ejs'])
    .pipe($.ejs())
    .pipe($.htmlPrettify({
      indent_char: ' ',
      indent_size: 2
    }))
    .pipe($.mjml())
    .pipe(gulp.dest('build/emails/')));

/**
 * Build task
 */
gulp.task('build', gulp.series('styles', 'emails'));

/**
 * Watch task
 */
gulp.task('watch', gulp.series(done => {
  gulp.watch('./**/*.styl', gulp.series('build'));
  done();
}));

/**
 * Default task
 */
gulp.task('default', gulp.series('watch'));
