$('#btn-a').on('click', function() {
    var d = dialog({
        title: '消息',
        content: '默认弹窗样式，使用jq插件artDialog弹窗！',
        okValue: '确定',
        ok: function() {},
        cancelValue: '取消',
        cancel: function() {}
    });

    d.showModal();
});

$('#btn-b').on('click', function() {
    var d = dialog({
        title: '消息',
        content: '弹窗内嵌弹窗，点击确定查看内嵌效果。',
        okValue: '确 定',
        ok: function() {
            dialog()
                .title('提示2')
                .content('hello world')
                .button([{
                    value: '打开',
                    autofocus: true,
                    callback: function() {
                        dialog()
                            .title('提示')
                            .showModal();
                    }
                }])
                .show();
            return false;
        },
        quickClose: true,
        cancelValue: '取消',
        cancel: function() {}
    });

    d.showModal();
});

$('#btn-c').on('click', function() {
    var d = dialog({
        title: '消息',
        content: '默认弹窗样式，添加自定义配置 “quickCloseNone：true”，无覆盖层点击关闭！',
        okValue: '确定',
        ok: function() {},
        cancelValue: '取消',
        cancel: function() {},
        quickCloseNone: true
    });

    d.showModal();
});


$('#btn-d').on('click', function() {
    var d = dialog({
        width: 48,
        height: 48
    });

    d.show();

    setTimeout(function() {
        d.close().remove();
    }, 1000);
});

$('#btn-e').on('click', function() {
    cutDialog.title('完成');
    cutDialog.showModal();
});

//气泡样式
$('#align-a').hover(function() {
    alignDialog.title = '头部';
    alignDialog.align = 'top left';
    alignDialog.show(this);
}, function() {
    alignDialog.close();
})

$('#align-b').hover(function() {
    alignDialog.align = 'left';
    alignDialog.show(this);
}, function() {
    alignDialog.close();
})

$('#align-c').hover(function() {
    alignDialog.align = 'right';
    alignDialog.show(this);
}, function() {
    alignDialog.close();
})

$('#align-d').hover(function() {
    alignDialog.align = 'top';
    alignDialog.show(this);
}, function() {
    alignDialog.close();
})


//自定义普通模板
var cutDialog = dialog({
    title: '提示',
    width: '500',
    content: '默认弹窗样式，这个是自定义弹窗模板，直接调用',
    okValue: '确定',
    ok: function() {

    },
    cancelValue: '取消',
    cancel: function() {
        this.close(); // 隐藏
        return false;
    },
    quickClose: true
});


//自定义气泡模板
var alignDialog = dialog({
    align: 'bottom left',
    content: 'hello world',
    skin: 'align-dialog'
});
