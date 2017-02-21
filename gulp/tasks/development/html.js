var gulp      = require('gulp');
var htmlmin   = require('gulp-htmlmin');
var config    = require('../../config');


gulp.task('html', function () {
    return gulp.src(config.html.src)
    .pipe(htmlmin(config.html.options))
    .pipe(gulp.dest(config.html.dest));
});
