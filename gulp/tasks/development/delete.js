var gulp   = require('gulp');
var del    = require('del');
var config = require('../../config').delete;

/**
 * 删除缓存
 */
gulp.task('delete', function(callback) {
  del(config.src, callback);
});
