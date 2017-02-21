var gulp   = require('gulp');
var config = require('../../config');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch:single', function() {
  gulp.watch(config.sass,    ['sass']);
  gulp.watch(config.scripts, ['scripts', 'jshint']);
});