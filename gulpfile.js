const gulp = require('gulp');
const eslint = require('gulp-eslint');
const mocha = require('gulp-mocha');
//require('gulp-watch');

gulp.task('default', ['lint', 'test'], () => {
  console.log('started');
});

gulp.task('lint', () => {
  gulp.src('/server.js')
  .pipe(eslint())
  .pipe(eslint.format());
});

gulp.task('test', () => {
  gulp.src('test/*.js')
  .pipe(mocha());
});

gulp.watch('./**/*.js', ['lint', 'test']);
