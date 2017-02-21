var gulp   = require('gulp');

/**
 * Replace urls in CSS fies with base64 encoded data
 */
gulp.task('help', function() {
    console.log('gulp                   默认构建(开发)');
    console.log('gulp build             开发打包');
    console.log('gulp build:production  生产打包');
    console.log('gulp watch             代码实时监控');
    console.log('gulp help              gulp帮助说明');
    console.log('gulp delete            删除缓存');
    console.log('gulp browsersync       本地静态服务器');
    console.log('gulp publish           生产环境测试');
    console.log('----------------------------------- ');
    console.log('gulp watchsass         监控sass');
    console.log('gulp watchcss          监控css');
    console.log('gulp watchjs           监控js');
    console.log('gulp watchimg          监控img');
    console.log('----------------------------------- ');
    console.log('gulp sass              sass编译');
    console.log('gulp styles            css编译');
    console.log('gulp lintcss           css代码检测');
    console.log('gulp scripts           js代码压缩');
    console.log('gulp jshint            js代码检测');
    console.log('gulp images            图片压缩');
    console.log('gulp copy:fonts        复制font');
    console.log('gulp copy:lib          复制第三方库');
    console.log('gulp sprites           sprites图片');
    console.log('gulp base64            base压缩');
    console.log('----------------------------------- ');
    console.log('gulp sass:post         *单个sass编译');
    console.log('gulp styles:post       *单个css编译');
    console.log('gulp styles:min        *单个css重命名');
    console.log('gulp watch:css         *单个css监控');
    console.log('gulp watch:single      *单个sass监控');

});