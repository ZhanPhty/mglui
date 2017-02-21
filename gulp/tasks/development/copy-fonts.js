var gulp   = require('gulp');
var config = require('../../config').copyfonts.develop;

/**
 * 拷贝font到dev
 */
gulp.task('copy:fonts', function() {
  return gulp.src(config.src)
    .pipe(gulp.dest(config.dest));
});
