
# MGUI

## 安装gulp

安装gulp构建及插件

`npm install`

启动gulp
> sass编译使用的是node-sass，请安装node-sass

`gulp`


## 目录结构
- src/ 
    + 源代码根目录 存放html
    
    - assets/

        - sass/
            + 存放 .scss

        - css/
            + mgui.css 和 style.css
    
        - fonts/
            + 存放 字体文件
    
        - images/
            + 存放 图片文件
            
            - sprites
                 + 存放雪碧图
    
        - js/
            + 存放私有js文件
    
        - lib/
            + 存放第三方依赖类库，如 chartjs等

- doc/
    + 代码规范

- bulid/
    + 开发环境, 从 src/ gulp构建生成
   
- gulp/
    + gulp指令目录，存放gulp配置和代码文件

- gulpfile.js
    + gulp 配置文件




### 版本管理

版本格式：主版本号.次版本号.修订号，版本号递增规则：

主版本号：整体改版

次版本号：功能性新增，bug修复

修订号：bug或新功能的调试版本，只作为开发版本，不做正式发布

_业务上使用时升级版本需要通知到开发，以及是否有dom修改，会不会影响到js_


###版本修改记录

 1. 2016-09-09 1.0.0：首发版本

###字体图标

淘宝iconfont使用：http://www.iconfont.cn/

###License

 MIT License


  [1]: http://www.iconfont.cn/