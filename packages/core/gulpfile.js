const gulp = require("gulp");
const $ = require("gulp-load-plugins")();

/**
 * CSS bundle task
 */
gulp.task("styles", () =>
  gulp
    .src("./src/main.styl")
    .pipe(
      $.stylus({
        "include css": true
      })
    )
    .pipe(
      $.autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false
      })
    )
    // Unminified CSS bundle
    .pipe($.rename("core.css"))
    .pipe(gulp.dest("./build/"))
    // Minified CSS bundle
    .pipe($.cssnano())
    .pipe($.rename("core.min.css"))
    .pipe(gulp.dest("./build/"))
);

/**
 * Build task
 */
gulp.task("build", gulp.series("styles"));

/**
 * Watch task
 */
gulp.task(
  "watch",
  gulp.series(done => {
    gulp.watch("./**/*.styl", gulp.series("build"));
    done();
  })
);

/**
 * Default task
 */
gulp.task("default", gulp.series("watch"));

/**
 * CDN task
 */
gulp.task("cdn:fonts", () =>
  gulp
    .src("./src/fonts/**/*.+(eot|svg|ttf|otf|woff|woff2)")
    .pipe(gulp.dest("./cdn/fonts"))
);

gulp.task("cdn:build", () =>
  gulp.src("./build/**/*.*").pipe(gulp.dest("./cdn"))
);

gulp.task("cdn", gulp.parallel("cdn:fonts", "cdn:build"));
