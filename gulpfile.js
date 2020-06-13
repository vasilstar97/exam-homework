var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create(),
    stylus = require('gulp-stylus'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', function () {
  OnFram();
  OnStyl();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("stylus/**/*", gulp.series('fram','styl'));
  gulp.watch("index.html").on('change', browserSync.reload);;
});

gulp.task('fram', function () {
  return OnFram();
});
gulp.task('styl', function () {
  return OnStyl();
});

function OnFram() {
  return gulp.src('stylus/framework.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}
function OnStyl() {
  return gulp.src('stylus/styles.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['last 4 versions'],
      cascade: true
    }))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream());
}
