var gulp = require('gulp');
var config = require('../../config');

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {
    gulp.watch(config.watch.sass, ['sass']);
    gulp.watch(config.watch.html, ['html']);
    // gulp.watch(config.watchSingle.src.styles, ['styles:post']);
    // gulp.watch(config.watchSingle.src.watch, ['styles:min']);
    gulp.watch(config.watch.styles, ['styles']);
    gulp.watch(config.watch.scripts, ['scripts', 'jsmin']);
    gulp.watch(config.watch.images, ['images']);
    gulp.watch(config.watch.fonts, ['copy:fonts']);
    gulp.watch(config.watch.lib, ['copy:lib']);
    gulp.watch(config.watch.sprites, ['sprites']);
});

gulp.task('watchsass', function() {
    gulp.watch(config.watch.sass, ['sass']);
});

gulp.task('watchcss', function() {
    gulp.watch(config.watch.styles, ['styles', 'lint-styles']);
});

gulp.task('watchjs', function() {
    gulp.watch(config.watch.scripts, ['scripts', 'jshint']);
});

gulp.task('watchimg', function() {
    gulp.watch(config.watch.sprites, ['sprites']);
    gulp.watch(config.watch.images, ['images']);
});
