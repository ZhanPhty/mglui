var Gritter = function () {

    $('#add-sticky').click(function(){

        var unique_id = $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: '这是一条需手动关闭通知!',
            // (string | mandatory) the text inside the notification
            text: '通知插件Gritter for jQuery，<a href="#" style="color:#ccc">可点击的a标签</a> 信息。',
            // (string | optional) the image to display on the left
            image: 'img/avatar-mini.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: true,
            // (int | optional) the time you want it to be alive for before fading out
            time: '',
            // (string | optional) the class name you want to apply to that specific message
            class_name: 'my-sticky-class'
        });

        // You can have it return a unique id, this can be used to manually remove it later using
        /*
         setTimeout(function(){

         $.gritter.remove(unique_id, {
         fade: true,
         speed: 'slow'
         });

         }, 6000)
         */

        return false;

    });

    $('#add-regular').click(function(){

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: '这是一条默认通知!',
            // (string | mandatory) the text inside the notification
            text: '通知插件Gritter for jQuery，<a href="#" style="color:#ccc">可点击的a标签</a> 信息。',
            // (string | optional) the image to display on the left
            image: 'img/avatar-mini.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (int | optional) the time you want it to be alive for before fading out
            time: ''
        });

        return false;

    });

    $('#add-max').click(function(){

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: '这个一条最大只显示3条的通知!',
            // (string | mandatory) the text inside the notification
            text: '通知插件Gritter for jQuery，<a href="#" style="color:#ccc">可点击的a标签</a> 信息。',
            // (string | optional) the image to display on the left
            image: 'img/avatar-mini.jpg',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (function) before the gritter notice is opened
            before_open: function(){
                if($('.gritter-item-wrapper').length == 3)
                {
                    // Returning false prevents a new gritter from opening
                    return false;
                }
            }
        });

        return false;

    });

    $('#add-without-image').click(function(){

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: '无图片的通知！',
            // (string | mandatory) the text inside the notification
            text: '通知插件Gritter for jQuery，<a href="#" style="color:#ccc">可点击的a标签</a> 信息。'
        });

        return false;
    });

    $('#add-gritter-light').click(function(){

        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: '白色主题的通知',
            // (string | mandatory) the text inside the notification
            text: '只需要添加class "gritter-light" 即可',
            class_name: 'gritter-light'
        });

        return false;
    });

    $("#remove-all").click(function(){

        $.gritter.removeAll();
        return false;

    });



}();