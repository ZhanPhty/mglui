$(document).ready(function() {
    //顶部菜单栏子菜单隐藏切换
    $(".menu-down").click(function(e) {
        //出本身之外隐藏
        $(".dropdown-menu").not(this).hide();

        var menuParse = $(this).parent("li");
        var open = menuParse.hasClass("open");
        //移除全部open
        $(".top-menu").find("li").removeClass("open");
        //本身可点击
        e = e || event;
        stopFunc(e);

        //判断执行切换状态
        if (open == true) {
            menuParse.removeClass("open");
            menuParse.find(".dropdown-menu").hide();
            return false;
        }
        if (open == false) {
            menuParse.addClass("open");
            menuParse.find(".dropdown-menu").show();
            return true;
        }
    });

    $(".modal-dialog-clear").click(function() {
        $(this).parent(".modal-dialog").fadeOut(200);
    });

    $(".ui-switch").click(function() {
        var switchChange = $(this).find(".ui-switch-control");

        if (typeof($(this).attr("disabled")) === "undefined") {
            if (switchChange.hasClass("ui-switch-on") == true) {
                switchChange.removeClass("ui-switch-on");
                switchChange.addClass("ui-switch-off");
            } else if (switchChange.hasClass("ui-switch-off") == true) {
                switchChange.removeClass("ui-switch-off");
                switchChange.addClass("ui-switch-on");
            }
        }
    });

    $(".user-ul li").click(function() {
        $(".user-ul li").removeClass("active");
        $(this).addClass("active");
    });

    $(".sidebar-toggle").click(function() {
        var famSidebar = $(this).parent(".ui-sidebar");
        var hasSidebar = famSidebar.hasClass("sidebar-close");
        console.log(hasSidebar);
        if (hasSidebar === true) {
            famSidebar.removeClass("sidebar-close");
        }
        if (hasSidebar === false) {
            famSidebar.addClass("sidebar-close");
        }
    });

    //默认展开菜单
    var subLi = $(".sidebar-menu").find(".active");
    subLi.parents(".sub-menu").prev("a").addClass("open");
    subLi.parents(".sub-menu").css({
        display: 'block'
    });
    
});

//全局点击事件
$(document).click(function(e) {
    $(".dropdown-menu").hide();
    $(".top-menu").find("li").removeClass("open");
});

//dropbox 展开
$(".ui-dropbox > button").on("click", function(e) {
    var dropOpen = $(this).hasClass("open");
    var dropMenu = $(this).next(".ui-drop-menu");

    //dropbox 全局初始化状态
    $(".ui-drop-menu").hide();
    $(".ui-dropbox > button").removeClass("open");

    if (dropMenu.is(":hidden")) {
        dropMenu.show();
    } else {
        dropMenu.hide();
    }

    $(document).one("click", function() {
        $(".ui-drop-menu").hide();
        $(".ui-dropbox > button").removeClass("open");
    });

    if (dropOpen == true) {
        $(this).removeClass("open");
        dropMenu.hide();
    } 
    if (dropOpen == false) {
        $(this).addClass("open");
    }

    e.stopPropagation();
});
$(".ui-drop-menu").on("click", function(e) {
    $(".ui-drop-menu").hide();
    $(".ui-dropbox > button").removeClass("open");
    e.stopPropagation();
});

function stopFunc(e) {
    e.stopPropagation ? e.stopPropagation() : e.cancelBubble = true;
}

//alert关闭事件
function alertClose(obj) {
    var alertObj = $(obj).closest(".ui-alert");

    alertObj.fadeOut(250, function() {
        alertObj.remove();
    });
}

//点击弹窗登录
function dialogShow() {
    $("#modal-dialog").fadeIn(200);
}

//radios切换选中
(function($) {
    $.fn.radioSelect = function(settings) {
        var $div = this;
        var items = $div.find("input[type=radio]");

        $div.on("click", "input[type=radio]", function() {
            items.removeProp("checked");
            $(this).prop("checked", "true");
        });
    };

})(jQuery);

//sidebar 收起后显示气泡
$('.sidebar-menu').find("i").hover(function() {
    var cntShow = $('.sidebar-menu').closest('.ui-sidebar').hasClass('sidebar-close');
    var cntTxt = $(this).next("span").text();
    var sidebarDialog = dialog({
        align: 'right',
        content: cntTxt,
        skin: 'align-dialog align-close'
    });

    if (cntShow == true) {
        sidebarDialog.show(this);
    }
}, function() {
    $('.align-close').parent('.ui-popup-focus').remove();
});

//input输入验证
function getValidate(str) {
    $(".error-prompt").text("");
    switch (str) {
        case "account":
            account();
            break;
        case "password":
            break;
    }
}

function account() {
    console.log("account");
}


//菜单切换
(function($, window, document, undefined) {
    var pluginName = "sidebarMenu";
    var defaults = {
        speed: 200,
        showDelay: 0,
        hideDelay: 0,
        singleOpen: true
    };
    function Plugin(element, options) {
        this.element = element;
        this.settings = $.extend({},
        defaults, options);
        this._defaults = defaults;
        this._name = pluginName;
        this.init()
    };
    $.extend(Plugin.prototype, {
        init: function() {
            this.openSubmenu();
        },
        openSubmenu: function() {
            $(this.element).children("ul").find("li").bind("click touchstart",
            function(e) {
                e.stopPropagation();
                e.preventDefault();
                if ($(this).children(".sub-menu").length > 0) {
                    if ($(this).children(".sub-menu").css("display") == "none") {
                        $(this).children(".sub-menu").delay(defaults.showDelay).slideDown(defaults.speed);
                        $(this).children(".sub-menu").siblings("a").addClass("open");
                        if (defaults.singleOpen) {
                            $(this).siblings().children(".sub-menu").slideUp(defaults.speed);
                            $(this).siblings().children(".sub-menu").siblings("a").removeClass("open")
                        }
                        return false
                    } else {
                        $(this).children(".sub-menu").delay(defaults.hideDelay).slideUp(defaults.speed)
                    }
                    if ($(this).children(".sub-menu").siblings("a").hasClass("open")) {
                        $(this).children(".sub-menu").siblings("a").removeClass("open")
                    }
                }
                window.location.href = $(this).children("a").attr("href")
            })
        }
    });
    $.fn[pluginName] = function(options) {
        this.each(function() {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName, new Plugin(this, options))
            }
        });
        return this
    }
})(jQuery, window, document);

$("#sidebar-menu").sidebarMenu();
