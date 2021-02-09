const gulp = require("gulp");
const gulpSass = require("gulp-sass");
const browserSync = require("browser-sync").create();
const gulpStylelint = require("gulp-stylelint");

function style() {
  return gulp
    .src("./scss/**/*.scss")
    .pipe(gulpSass())
    .pipe(gulp.dest("./css"))
    .pipe(browserSync.stream());
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("./scss/**/*.scss", style);
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./**/*.js").on("change", browserSync.reload);
}

function lintCss() {
  return gulp.src("./scss/**/*.scss").pipe(
    gulpStylelint({
      reporters: [{ formatter: "string", console: true }],
    })
  );
}

exports.style = style;
exports.watch = watch;
exports.lintCss = lintCss;
