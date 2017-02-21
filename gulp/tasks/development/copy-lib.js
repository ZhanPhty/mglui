var gulp           = require('gulp');
var uglify         = require('gulp-uglify');
var cleancss       = require('gulp-clean-css');
var csso           = require('gulp-csso');
var header         = require('gulp-header');
var config         = require('../../config');

/**
 * 拷贝lib文件夹到dev
 */

 var banner         = ['/**',
  ' * Copyright (c) <%= new Date().getFullYear() %> Cofey',
  ' * @description ' + config.pkg.description,
  ' * @version ' + config.pkg.version,
  ' * @link ' + config.pkg.link,
  ' * @license ' + config.pkg.license,
  ' * @Release ' + '<%= new Date() %>',
  ' **/',
  ''].join('\n');


gulp.task('copy:libcss', function () {
  return gulp.src(config.copylib.developcss.src)
    .pipe(csso())
    .pipe(cleancss(config.styles.options.cleancss))
    .pipe(header(banner, { pkg : config.pkg }))
    .pipe(gulp.dest(config.copylib.developcss.dest));
});

gulp.task('copy:libjs', function() {
  return gulp.src(config.copylib.developjs.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.copylib.developjs.dest));
});

gulp.task('copy:lib', ['copy:libjs', 'copy:libcss'], function() {
  return gulp.src(config.copylib.develop.src)
    .pipe(gulp.dest(config.copylib.develop.dest));
});

    