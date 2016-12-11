
const gulp = require('gulp');
const replace = require('gulp-replace');
const rev = require('./dist/rev.json');

gulp.task('post-build', () => {
  var bundle = rev['main.js'];
  return gulp.src('src/index.html')
    .pipe(replace('main.js', bundle))
    .pipe(gulp.dest('dist/'))
});