var gulp    = require('gulp');
var jshint  = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify  = require('gulp-uglify');
var config  = require('../../config');

/**
 * 检测 JavaScript 代码
 */
gulp.task('jshint', function() {
  return gulp.src(config.jshint.src)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('jsmin', function () {
  return gulp.src(config.jsmin.src) 
    .pipe(uglify())
    .pipe(gulp.dest(config.jsmin.dest));
});
