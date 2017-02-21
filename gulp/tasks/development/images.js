var gulp        = require('gulp');
var changed     = require('gulp-changed');
var config      = require('../../config').images;

/**
 * 拷贝image到dev环境
 * if not changed
 */
gulp.task('images', function() {
  return gulp.src(config.src)
    .pipe(changed(config.dest)) // Ignore unchanged files
    .pipe(gulp.dest(config.dest));
});