var gulp           = require('gulp');
var rename         = require('gulp-rename');
var postcss        = require('gulp-postcss');
var precss         = require('precss');
var plumber        = require('gulp-plumber');
var sourcemaps     = require('gulp-sourcemaps');
var gutil          = require('gulp-util');
var header         = require('gulp-header');
var browsersync    = require('browser-sync');
var mqpacker       = require('css-mqpacker');
var cssver         = require('gulp-make-css-url-version');
var cleancss       = require('gulp-clean-css');
var csso           = require('gulp-csso');
var autoprefixer   = require('autoprefixer');
var cssnested      = require('postcss-nested');
var cssscss        = require('postcss-scss');
var cssalias       = require('postcss-alias');
var csscrip        = require('postcss-crip');
var cssmagician    = require('postcss-font-magician');//分割----速写与简写
var csstriangle    = require('postcss-triangle');
var csscircle      = require('postcss-circle');
var csslinkColors  = require('postcss-all-link-colors');
var csscenter      = require('postcss-center');
var cssclearfix    = require('postcss-clearfix');
var cssposition    = require('postcss-position');
var csssize        = require('postcss-size');
var csscolorShort  = require('postcss-color-short');
var cssverthorz    = require('postcss-verthorz');

var config         = require('../../config');

var banner         = ['/**',
  ' * Copyright (c) <%= new Date().getFullYear() %> Cofey',
  ' * @description ' + config.pkg.description,
  ' * @version ' + config.pkg.version,
  ' * @link ' + config.pkg.link,
  ' * @license ' + config.pkg.license,
  ' * @Release ' + '<%= new Date() %>',
  ' **/',
  ''].join('\n');


function onError (err) {
  gutil.beep();
  console.log(err);
  this.emit('end');
}

/**
 * 运行PostCSS以及插件
 * Build sourcemaps and minimize
 */
var processors = [
  precss(config.styles.options.precss),
  autoprefixer(config.styles.options.autoprefixer),
  mqpacker(config.styles.options.mqpacker),
  cssalias,
  csscrip,
  cssmagician,
  csstriangle,
  csscircle,
  csslinkColors,
  csscenter,
  cssclearfix,
  cssposition,
  csssize,
  csscolorShort,
  cssverthorz
];

gulp.task('styles', function () {
  browsersync.notify('Transforming CSS with PostCSS');

  return gulp.src(config.styles.src)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(cssver())
    .pipe(csso())
    .pipe(cleancss(config.styles.options.cleancss))
    .pipe(header(banner, { pkg : config.pkg }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.styles.dest));
});


//单个文件自定义

gulp.task('watch:css', function() {
  gulp.watch(config.watchSingle.src.styles, ['styles:post']);
  gulp.watch(config.watchSingle.src.watch, ['styles:min']);
});

gulp.task('styles:post', function () {
  return gulp.src(config.watchSingle.src.styles)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(cssver())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.watchSingle.dest.styles));
});

gulp.task('styles:min', function () {
  return gulp.src(config.watchSingle.src.watch)
    .pipe(plumber({
      errorHandler: onError
    }))
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(cssver())
    .pipe(csso())
    .pipe(cleancss(config.styles.options.cleancss))
    .pipe(header(banner, { pkg : config.pkg }))
    .pipe(rename(config.watchSingle.options.rename))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(config.watchSingle.dest.styles));
});