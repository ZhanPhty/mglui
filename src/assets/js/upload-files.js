$(document).ready(function(){
    //Example 2
    $("#filerInput1, #filerInput2, #filerInput3, #filerInput4, #filerInput5").filer({
        limit: null,
        maxSize: null,
        extensions: null,
        showThumbs: true,
        limit: 1,
        addMore: true,
        captions: {
            button: "选择文件",
            feedback: "请选择上传的文件...",
            feedback2: "个文件",
            drop: "上传文件",
            removeConfirmation: "确实要删除此文件吗？",
            errors: {
                filesLimit: "只能上传 {{fi-limit}} 个文件",
                filesType: "只能上传图片",
                filesSize: "{{fi-name}} 文件太大! 文件大小不能大于 {{fi-maxSize}} MB.",
                filesSizeAll: "你选择的文件太大！文件大小不能大于 {{fi-maxSize}} MB."
            }
        },
        uploadFile: {
            url: "./php/ajax_upload_file.php",
            data: null,
            type: 'POST',
            enctype: 'multipart/form-data',
            synchron: true,
            beforeSend: function(){},
            success: function(data, itemEl, listEl, boxEl, newInputEl, inputEl, id){
                var parent = itemEl.find(".jFiler-jProgressBar").parent(),
                    new_file_name = JSON.parse(data),
                    filerKit = inputEl.prop("jFiler");

                filerKit.files_list[id].name = new_file_name;

                itemEl.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                    $("<div class=\"jFiler-item-others text-success\"><i class=\"icon-jfi-check-circle\"></i> 上传成功</div>").hide().appendTo(parent).fadeIn("slow");
                });
            },
            error: function(el){
                var parent = el.find(".jFiler-jProgressBar").parent();
                el.find(".jFiler-jProgressBar").fadeOut("slow", function(){
                    $("<div class=\"jFiler-item-others text-error\"><i class=\"icon-jfi-minus-circle\"></i> 上传失败</div>").hide().appendTo(parent).fadeIn("slow");
                });
            },
            statusCode: null,
            onProgress: null,
            onComplete: null
        }
    });
})