var gulp           = require('gulp');
var sourcemaps     = require('gulp-sourcemaps');
var sass           = require('gulp-sass');
var gutil          = require('gulp-util');
var postcss        = require('gulp-postcss');
var precss         = require('precss');
var mqpacker       = require('css-mqpacker');
var autoprefixer   = require('autoprefixer');
var cssnested      = require('postcss-nested');
var cssscss        = require('postcss-scss');
var cssverthorz    = require('postcss-verthorz');
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

var config         = require('../../config');
/**
 * sass编译
 * Build sourcemaps
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

gulp.task('sass', function () {
  return gulp.src(config.sass.src)
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options.outputstyle).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.sass.dest))
});

gulp.task('sass:post', function () {
  return gulp.src(config.watchSingle.src.sass)
    .pipe(sourcemaps.init())
    .pipe(sass(config.sass.options.outputstyle).on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(config.watchSingle.dest.sass))
});