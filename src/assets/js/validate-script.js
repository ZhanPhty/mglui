$.validator.setDefaults({
    submitHandler: function() {
        alert("登录成功!");
    }
});

$().ready(function() {
    $("#loginForm").validate({
        //debug开启调试不提交form
        debug: true,
        rules: {
            account: {
                required: true
            },
            password: {
                required: true,
                minlength: 6
            },
            agree: "required"
        },
        messages: {
            account: {
                required: "请输入账号"
            },
            password: {
                required: "请输入密码",
                minlength: "密码不少于5位"
            },
            agree: "请同意协议"
        }
    });
});
