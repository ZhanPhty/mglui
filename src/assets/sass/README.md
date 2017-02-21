# scss结构

    base:
    包含以下组件: 

        //  base.scss 文件主要是包含 reset 初始化样式的核心文件
        "core/setting",
        "core/css3",
        "core/media-queries",
        "core/mixin",
        "core/grid",
        "core/animation",
        "core/reset",

    function:
    包含以下组件: 

        //  function.scss 文件不包含 reset 初始化样式的核心文件
        "core/setting",
        "core/css3",
        "core/media-queries",
        "core/mixin",
        "core/grid",
        "core/animation",


    mgui:
    框架UI的核心文件: 

        // 引用Sass基本变量函数、包含reset样式
        "base",

        // 基本样式
        "base/preset",
        "base/type",
        "base/iconfont",
        "base/iconfont-full",

        // util
        "util/arrowlink",
        "util/border",
        "util/grid",
        "util/justify",
        "util/layout",
        "util/nowrap",
        "util/placehold",
        "util/whitespace",

        // component
        "component/button",
        "component/form",
        "component/tabs",
        "component/table",
        "component/label";
  
      style:
      包含了header、tab和时间轴样式:
