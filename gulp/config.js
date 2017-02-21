"use strict";

var src = 'src';
var build = 'build';
var develop = 'build/dev';
var production = 'build/production';
var srcAssets = 'src/assets';
var developAssets = 'build/assets';
var productionAssets = 'build/production/assets';

module.exports = {
    browsersync: {
        develop: {
            server: {
                baseDir: [src]
            },
            port: 3005,
            files: [
                developAssets + '/css/*.css',
                developAssets + '/js/*.js',
                developAssets + '/images/**',
                developAssets + '/fonts/*',
                developAssets + '/lib/*',
                build + '/*.html'
            ]
        },
        production: {
            server: {
                baseDir: [production]
            },
            port: 8078
        }
    },
    delete: {
        src: [developAssets, build + '/*.html']
    },
    styles: {
        src: srcAssets + '/css/*.css',
        dest: developAssets + '/css',
        options: {
            precss: {},
            autoprefixer: {
                browsers: [
                    'last 2 versions',
                    'safari 5',
                    'ie 8',
                    'ie 9',
                    'opera 12.1',
                    'ios 6',
                    'Android >= 4.0',
                    'Firefox >= 20',
                    '> 5%',
                    'last 4 Chrome versions'
                ],
                cascade: true,
                remove: true
            },
            cleancss: {
                advanced: false, //是否开启高级优化（合并选择器等）
                compatibility: 'ie8', //保留ie8兼容写法
                keepBreaks: false, //是否保留换行
                keepSpecialComments: '*' //保留所有特殊前缀
            },
            mqpacker: {}
        }
    },
    html: {
        src: src + '/*.html',
        dest: build,
        options: {
            removeComments: true, //清除HTML注释
            collapseWhitespace: false, //压缩HTML
            collapseBooleanAttributes: true, //省略布尔属性的值
            removeEmptyAttributes: true, //删除所有空格作属性值
            removeScriptTypeAttributes: true, //删除<script>的type="text/javascript"
            removeStyleLinkTypeAttributes: true, //删除<style>和<link>的type="text/css"
            minifyJS: true, //压缩页面JS
            minifyCSS: true //压缩页面CSS
        }
    },
    sass: {
        src: srcAssets + '/sass/**/*.scss',
        dest: srcAssets + '/css',
        options: {
            outputstyle: {
                outputStyle: 'expanded'
            }
        }
    },
    lintStyles: {
        src: [
            srcAssets + '/css/**/*.css',
            '!' + srcAssets + '/css/partials/_syntax-highlighting.css',
            '!' + srcAssets + '/css/partials/_sprites.css',
            '!' + srcAssets + '/css/partials/fontcustom.css'
        ],
        options: {
            stylelint: {
                'rules': {
                    'color-hex-case': 'upper', //字体颜色小写
                    'number-leading-zero': 'always',
                    'indentation': 4,
                    'string-quotes': [2, 'double'],
                    'color-hex-case': [2, 'lower'],
                    'value-no-vendor-prefix': 2,
                    'declaration-no-important': 0,
                    'rule-non-nested-empty-line-before': [2, 'always', {
                        ignore: ['after-comment']
                    }]
                }
            },
            reporter: {
                clearMessages: true
            }
        }
    },
    browserify: {
        // Enable source maps
        debug: true,
        // Additional file extensions to make optional
        extensions: ['.coffee', '.hbs'],
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries: './' + srcAssets + '/js/application.js',
            dest: developAssets + '/js',
            outputName: 'application.js'
        }]
    },
    images: {
        src: srcAssets + '/images/**/*',
        dest: developAssets + '/images'
    },
    webp: {
        src: productionAssets + '/images/**/*.{jpg,jpeg,png,gif,svg}',
        dest: productionAssets + '/images/',
        options: {}
    },
    gzip: {
        src: production + '/**/*.{html,xml,json,css,js}',
        dest: production,
        options: {}
    },
    copyfonts: {
        develop: {
            src: srcAssets + '/fonts/**/*',
            dest: developAssets + '/fonts'
        },
        production: {
            src: developAssets + '/fonts/**/*',
            dest: productionAssets + '/fonts'
        }
    },
    copylib: {
        developcss: {
            src: srcAssets + '/lib/**/**/*.css',
            dest: developAssets + '/lib'
        },
        developjs: {
            src: srcAssets + '/lib/**/**/*.js',
            dest: developAssets + '/lib'
        },
        develop: {
            src: [srcAssets + '/lib/**/**/*',
                '!' + srcAssets + '/lib/**/**/*.js',
                '!' + srcAssets + '/lib/**/**/*.css'
            ],
            dest: developAssets + '/lib'
        },
        production: {
            src: developAssets + '/lib/**/**/*',
            dest: productionAssets + '/lib/**'
        }
    },
    base64: {
        src: developAssets + '/css/*.css',
        dest: developAssets + '/css',
        options: {
            baseDir: build,
            extensions: ['png'],
            maxImageSize: 20 * 1024, // bytes
            debug: false
        }
    },
    watch: {
        html: src + '/*.html',
        sass: srcAssets + '/sass/**/*.scss',
        styles: srcAssets + '/css/**/*.css',
        scripts: srcAssets + '/js/**/*',
        images: srcAssets + '/images/**/*',
        sprites: srcAssets + '/images/**/*.png',
        fonts: srcAssets + '/fonts/**/*',
        lib: srcAssets + '/lib/**/*',
        svg: 'vectors/*.svg'
    },
    jshint: {
        src: srcAssets + '/js/**/*'
    },
    jsmin: {
        src: [srcAssets + '/js/**/*.js',
            '!' + srcAssets + '/js/{head,application}.js'
        ],
        dest: developAssets + '/js'
    },
    sprites: {
        src: srcAssets + '/images/sprites/icon/*.png',
        dest: {
            sass: srcAssets + '/sass/base/',
            css: srcAssets + '/css/sprites/',
            image: srcAssets + '/images/sprites/'
        },
        options: {
            cssName: 'sprites.css',
            cssFormat: 'css',
            cssOpts: {
                cssClass: function(item) {
                    // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
                    if (item.name.indexOf('-hover') !== -1) {
                        return '.icon-' + item.name.replace('-hover', ':hover');
                        // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
                    } else {
                        return '.icon-' + item.name;
                    }
                }
            },
            imgName: 'icon-sprite.png',
            imgPath: '/assets/images/sprites/icon-sprite.png'
        },
        optionssass: {
            cssName: '_sprites.scss',
            cssFormat: 'css',
            cssOpts: {
                cssClass: function(item) {
                    // If this is a hover sprite, name it as a hover one (e.g. 'home-hover' -> 'home:hover')
                    if (item.name.indexOf('-hover') !== -1) {
                        return '.icon-' + item.name.replace('-hover', ':hover');
                        // Otherwise, use the name as the selector (e.g. 'home' -> 'home')
                    } else {
                        return '.icon-' + item.name;
                    }
                }
            },
            imgName: 'icon-sprite.png',
            imgPath: '/assets/images/sprites/icon-sprite.png'
        }
    },
    optimize: {
        css: {
            src: developAssets + '/css/*.css',
            dest: productionAssets + '/css/',
            options: {
                keepSpecialComments: 0
            }
        },
        js: {
            src: developAssets + '/js/*.js',
            dest: productionAssets + '/js/',
            options: {}
        },
        images: {
            src: developAssets + '/images/**/*.{jpg,jpeg,png,gif}',
            dest: productionAssets + '/images/',
            options: {
                optimizationLevel: 3,
                progessive: true,
                interlaced: true
            }
        },
        html: {
            src: production + '/**/*.html',
            dest: production,
            options: {
                collapseWhitespace: true
            }
        }
    },
    revision: {
        src: {
            assets: [
                productionAssets + '/css/*.css',
                productionAssets + '/js/*.js',
                productionAssets + '/images/**/*'
            ],
            base: production
        },
        dest: {
            assets: production,
            manifest: {
                name: 'manifest.json',
                path: productionAssets
            }
        }
    },
    collect: {
        src: [
            productionAssets + '/manifest.json',
            production + '/**/*.{html,xml,txt,json,css,js}',
            '!' + production + '/feed.xml'
        ],
        dest: production
    },
    rsync: {
        src: production + '/**',
        options: {
            destination: '~/path/to/my/website/root/',
            root: production,
            hostname: 'mydomain.com',
            username: 'user',
            incremental: true,
            progress: true,
            relative: true,
            emptyDirectories: true,
            recursive: true,
            clean: true,
            exclude: ['.DS_Store'],
            include: []
        }
    },
    pkg: {
        name: 'gulp-zhan',
        description: 'gulp Bulid Project (http://www.uizph.com) by：ZhanPhty',
        version: '1.0.5',
        link: 'http://www.uizph.com',
        license: 'MIT'
    },
    watchSingle: {
        src: {
            sass: srcAssets + '/sass/**/*.scss',
            styles: srcAssets + '/css/jeui.css', //注：单个文件监控
            watch: developAssets + '/css/jeui.css' //压缩前监控的文件路径和  dest.styles 路径一样
        },
        dest: {
            sass: srcAssets + '/css',
            styles: developAssets + '/css'
        },
        options: {
            rename: {
                extname: '.min.css'
            }
        }
    }
};
