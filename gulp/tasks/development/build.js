var gulp        = require('gulp');
var runSequence = require('run-sequence');

/**
 * Run all tasks needed for a build in defined order
 */
gulp.task('build', function(callback) {
  runSequence(
  [ 
    'sass',
    'styles',
    'scripts',
    'jsmin',
    'images',
    'copy:fonts',
    'copy:lib',
    'html'
  ],
  'base64',
  callback);
});
