const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const { gifsicle, jpegtran, optipng, svgo } = require('gulp-imagemin');

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
    .pipe($.cssnano({ safe: true }))
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
    .pipe(gulp.dest('./build/emails/'))
);

/**
 * CDN task: prepares the cdn folder with all the files to upload.
 */
gulp.task('cdn:images', () =>
  gulp.src('./src/**/*.+(png|jpg|jpeg|gif|svg)')
    .pipe($.imagemin([
      gifsicle(), jpegtran(), optipng(),
      svgo({ plugins: [{ removeUselessDefs: false }] })
    ]))
    .pipe(gulp.dest('./cdn/media'))
);

gulp.task('cdn:others', () =>
  gulp.src('./build/**/*.*')
    .pipe(gulp.dest('./cdn'))
);

gulp.task('cdn', gulp.parallel('cdn:images', 'cdn:others'));

/**
 * Build task
 */
gulp.task('build', gulp.series('styles', 'emails'));

/**
 * Watch task
 */
gulp.task('watch', gulp.series((done) => {
  gulp.watch('./**/*.styl', gulp.series('build'));
  done();
}));

/**
 * Default task
 */
gulp.task('default', gulp.series('watch'));
