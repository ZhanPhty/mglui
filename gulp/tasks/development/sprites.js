var gulp        = require('gulp');
var spritesmith = require('gulp.spritesmith');
var config      = require('../../config').sprites;

/**
 * 合并png格式图片为雪碧图，分别导出sass版本和css版本
 */
gulp.task('sprites', function() {

  var spriteData = gulp.src(config.src).pipe(spritesmith(config.options));
  var spriteDatasass = gulp.src(config.src).pipe(spritesmith(config.optionssass));

  spriteData.img
    .pipe(gulp.dest(config.dest.image));

  spriteData.css
    .pipe(gulp.dest(config.dest.css));

  spriteDatasass.css
    .pipe(gulp.dest(config.dest.sass));
});
