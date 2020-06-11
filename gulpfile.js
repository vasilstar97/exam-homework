var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
  OnStyl();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("stylus/**/*", gulp.series('styl'));
  gulp.watch("index.html").on('change', browserSync.reload);;
});

gulp.task('styl', function () {
  return OnStyl();
});

function OnStyl() {
  return gulp.src('stylus/framework.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}
