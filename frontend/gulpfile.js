
const gulp = require('gulp');
const replace = require('gulp-replace');
const rev = require('./dist/rev.json');
const less = require('gulp-less');

gulp.task('styles', () => {
  return gulp.src('src/styles.less')
    .pipe(less())
    .pipe(gulp.dest('dist'))
});

gulp.task('build', ['styles'], () => {

  var bundle = rev['main.js'];
  return gulp.src('src/index.html')
    .pipe(replace('main.js', bundle))
    .pipe(gulp.dest('dist/'))
});