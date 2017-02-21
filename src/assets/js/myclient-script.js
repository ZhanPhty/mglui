$(function() {
    $(".chosen-select").chosen({
        disable_search_threshold: 10,
        width: "100%"
    });

    $(".chosen-select-all").chosen({
        max_selected_options: 4
    });

});

$(".btn-tag-screen").click(function() {
    $(".search-criter").slideToggle(300);
    $(this).toggleClass("active");
});

function tranCustomer() {
    var dialgHtml = "";
    dialgHtml += "<div class='ui-form-group'>";
    dialgHtml += "<label class='ui-label-control ui-col ui-col-20'>转交给</label>";
    dialgHtml += "<div class='ui-col ui-col-75'>";
    dialgHtml += "<select class='chosen-select ui-col'>";
    dialgHtml += "<option>管理员账号</option>";
    dialgHtml += "<option>李磊</option>";
    dialgHtml += "<option>韩梅梅</option>";
    dialgHtml += "</select></div></div>"
    dialgHtml += "<div class='ui-form-group'>";
    dialgHtml += "<label class='ui-label-control ui-col ui-col-20'>转交说明</label>";
    dialgHtml += "<div class='ui-col ui-col-75'>";
    dialgHtml += "<textarea class='ui-input-control ui-height-auto ui-col' rows='4'></textarea>";
    dialgHtml += "</div></div>";
    dialgHtml += "<p class='ui-txt-muted ui-txt-center'>提示：转交后客户的所有相关信息都将被转给其它成员</p>";

    var d = dialog({
        width: "420",
        title: '客户转交给指定人员',
        content: dialgHtml,
        okValue: '确定转交',
        ok: function() {
            alert("保存成功")
        },
        cancelValue: '关闭',
        cancel: function() {}
    }).showModal();
}


$('#client-table').DataTable({
    // "lengthChange": false,//是否允许用户改变表格每页显示的记录数(lengthChange)
    "processing": true,
    "searching": false,//是否允许Datatables开启本地搜索
    "deferRender": true,//延迟渲染
    "pageLength": 10, //一页显示10条数据
    "stripeClasses": [ 'table-list'],
    "order": [1, 'asc'], //从第二列开始排序
    "bAutoWidth": false, //表格自适应
    "ajax": "assets/lib/dataTables/table.json",
    "columns": [
        { "data": null},
        { "data": "name" },
        { "data": "kf" },
        { "data": "office" },
        { "data": "word" },
        { "data": "mgl" },
        { "data": "position" }
    ],
    "columnDefs": [
        {   
            "targets": [0],
            "data": "id",
            "render": function(data, type, full) {
                return '<input type="checkbox"  class="checkchild ui-check listch" name=data.clientId />';
            }
        },
        { 
            "orderable": false, "targets": 0 //第一列不进行排序
        }
    ],
    "language": {
          "sProcessing": "处理中...",
          "sLengthMenu": "显示行数 _MENU_",
          "sZeroRecords": "没有匹配结果",
          "sInfo": "_START_ - _END_ 条，共 _TOTAL_ 条",
          "sInfoEmpty": "第 0 至 0 条结果，共 0 条",
          "sInfoFiltered": "(由 _MAX_ 条结果过滤)",
          "sInfoPostFix": "",
          "sSearch": "搜索:",
          "sUrl": "",
          "sEmptyTable": "表中数据为空",
          "sLoadingRecords": "载入中...",
          "sInfoThousands": ",",
          "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页"
          },
          "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
          }
    },
    "sZeroRecords": "没有检索到数据"
});

$('#contact-table').DataTable({
    "scrollX": true,
    "scrollY": "100%",
    "scrollCollapse": true,
    "processing": true,
    "searching": false,//是否允许Datatables开启本地搜索
    "deferRender": true,//延迟渲染
    "pageLength": 10, //一页显示10条数据
    "order": [1, 'asc'], //从第二列开始排序
    "bAutoWidth": false, //表格自适应
    "ajax": "assets/lib/dataTables/table.json",
    "columns": [
        { "data": null},
        { "data": "name" },
        { "data": "position" },
        { "data": "salary" },
        { "data": "start_date" },
        { "data": "office" },
        { "data": "extn" },
        { "data": "office" },
        { "data": "phone" },
        { "data": "qq" },
        { "data": "weixin" },
        { "data": "mail" },
        { "data": "add" }
    ],
    "columnDefs": [
        {   
            "targets": [0],
            "data": "id",
            "render": function(data, type, full) {
                return '<input type="checkbox"  class="checkchild ui-check" name=data.clientId />';
            }
        },
        { 
            "orderable": false, "targets": 0 //第一列不进行排序
        }
    ],
    "fixedColumns": {
        "leftColumns": 2
    },
    "language": {
          "sProcessing": "处理中...",
          "sLengthMenu": "显示行数 _MENU_",
          "sZeroRecords": "没有匹配结果",
          "sInfo": "_START_ - _END_ 条，共 _TOTAL_ 条",
          "sInfoEmpty": "第 0 至 0 条结果，共 0 条",
          "sInfoFiltered": "(由 _MAX_ 条结果过滤)",
          "sInfoPostFix": "",
          "sSearch": "搜索:",
          "sUrl": "",
          "sEmptyTable": "表中数据为空",
          "sLoadingRecords": "载入中...",
          "sInfoThousands": ",",
          "oPaginate": {
            "sFirst": "首页",
            "sPrevious": "上页",
            "sNext": "下页",
            "sLast": "末页"
          },
          "oAria": {
            "sSortAscending": ": 以升序排列此列",
            "sSortDescending": ": 以降序排列此列"
          }
    },
    "sZeroRecords": "没有检索到数据"
});


//全选、取消全选
$("#checkall").click(function(){   
    if(this.checked){   
        $(".listch").prop("checked", true);  
    }else{   
    $(".listch").prop("checked", false);
    }   
});

$(".listch").click(function(){
    var chknum = $(".listch").size();
    var chk = 0;
    $(".listch").each(function () {  
        if($(this).prop("checked")==true){
            chk++;
        }
    });
    if(chknum==chk){//全选
        $("#checkall").prop("checked",true);
    }else{//不全选
        $("#checkall").prop("checked",false);
    }
});

//全局变量-载入客户编辑页html
//判断是不是第一次加载
var clientDataliSwitch = true;

//ajax侧滑加载编辑页面
$(document).on("click", ".table-list td:not(:first-child)", function(e) {
    $(this).siblings().removeClass("active").end().addClass ("active");
    if (clientDataliSwitch === true) {
        $("body").append("<div id='slide-eidt'><div class='rota-load'><i class='icon-jiazai icon-pulse'></i></div></div>");
        clientDataliSwitch = false;
    }
    $("#slide-eidt").animate({
        right: 0
    }, 300);

    //点击停止冒泡，隐藏侧边页面
    $(".main-content, .ui-header, .ui-tab-hd, .panel-tit").one("click", function(event) {
        if($(event.target).closest(".ui-table").length == 0){
            slideClear();
        }
    });
    e.stopPropagation();

    //通过ajax加载页面
    var slideUrl = "./slide-eidt.html";
    $.ajax( {
        url: slideUrl,
        type: "GET",
        success: function(data){
            var result = $(data).find(".slide-cnt");
            $("#slide-eidt").html(result);

            $(".slideTxtBox").slide({
                trigger: "click",
                delayTime: 0,
                titOnClassName: "active"
            });
        }
    });
});
function slideClear() {
    //关闭隐藏侧边页
    $("#slide-eidt").animate({
        right: -1010
    }, 300);

    //移除列表选中状态
    $(".table-list").removeClass("active");
}

//全局变量-定时器
//判断是不是第一次加载
var setContact = true;

//ajax侧滑加载编辑页面----新建联系人详情页
$(document).on("click", ".scroll-sub-menu", function(e) {
    if (setContact === true) {
        $("body").append("<div id='slide-contact'></div>");
        setContact = false;
    }

    $("#slide-contact").animate({
        right: 0
    }, 300);

    //通过ajax加载页面
    var slideUrl = "./contact-detail.html";
    $.ajax( {
        url: slideUrl,
        type: "GET",
        success: function(data){
            var result = $(data).find(".slide-cnt");
            $("#slide-contact").html(result);
            $("#slide-contact").after("<div class='slide-contact-mask' onclick='contactClear()'></div>");

            $(".slideTxtBox").slide({
                trigger: "click",
                delayTime: 0,
                titOnClassName: "active"
            });
        }
    });
});
function contactClear() {
    //关闭隐藏侧边页
    $("#slide-contact").animate({
        right: -1010
    }, 300);

    $(".slide-contact-mask").remove();
}


//侧边页修改内容
function modifyContent() {
    $(".btn-modify").hide();
    $(".btn-save, .btn-cancel").show();
    $(".scroll-body").find("input[type=text], textarea").attr("readonly", false);
    $(".scroll-wrapper .chosen-select").chosen({});
    $(".scroll-wrapper .chosen-select").attr('disabled', false).trigger("chosen:updated");
    $(".scroll-wrapper .checkboxes").find(".ui-checkbox").show();
    $(".scroll-wrapper .checkboxes").removeClass("check-hidden");
}

//侧边页保存内容
function saveContent() {
    cancelContent();
}

//侧边页取消保存
function cancelContent() {
    $(".btn-modify").show();
    $(".btn-save, .btn-cancel").hide();
    $(".scroll-body").find("input[type=text], textarea").attr("readonly", true);
    $(".scroll-wrapper .chosen-select").chosen({});
    $(".scroll-wrapper .chosen-select").attr('disabled', true).trigger("chosen:updated");
    $(".scroll-wrapper .checkboxes").addClass("check-hidden");
    clearCh();
}

function clearCh(){
    //隐藏没有选中的多选框
    $(".checkboxes").find("input[type=checkbox]").each(function () {  
        if ($(this).prop("checked") ==  false) {
            $(this).parent(".ui-checkbox").hide();
        }
    });
}

//新建主营产品
function mainProductAddHtml(){
    var html = '';

    html = '<div class="ui-row"><div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">材质表面</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="材质表面" class="chosen-select ui-col">';
    html += '<option value=""></option>';
    html += '<option value="304/2B">304/2B</option>';
    html += '</select></div></div>';

    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">生产厂家</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="生产厂家" class="chosen-select ui-col">';
    html += '<option value=""></option>';
    html += '<option value="不锈钢有限公司">不锈钢有限公司</option>';
    html += '</select></div></div>';

    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">宽度</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="宽度" class="chosen-select ui-col">';
    html += '<option value=""></option>';
    html += '<option value="5000">5000</option>';
    html += '</select></div></div>';

    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">厚度</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="厚度" class="chosen-select ui-col chosen-thick" multiple>';
    html += '<option value=""></option>';
    html += '<option value="0.4">0.4</option>';
    html += '<option value="范围">范围</option>';
    html += '</select></div>';
    html += '<div class="ui-form-group ui-col client-inline">';
    html += '<input type="text" class="ui-input-control ui-col ui-col-20" placeholder="最小厚度">';
    html += '<span class="ui-txt-muted ui-col ui-col-8">—</span>';
    html += '<input type="text" class="ui-input-control ui-col ui-col-20" placeholder="最大厚度">';
    html += '</div></div>';

    html += '<div class="ui-form-group ui-col ui-mb0">';
    html += '<label class="ui-label-control ui-col ui-col-20">公差</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="公差" class="chosen-select ui-col">';
    html += '<option value=""></option>';
    html += '<option value="小差">小差</option>';
    html += '<option value="大差">大差</option>';
    html += '<option value="正常公差">正常公差</option>';
    html += '</select></div></div>';

    html += '</div>';

    var d = dialog({
        width: "500",
        fixed: true,
        skin: "crm-form",
        title: '新增主营产品',
        content: html,
        id: "slideEidt",
        button: [
            {
                value: '保存',
                callback: function () {
                    $('#addClientForm').submit();
                    return false;
                },
                autofocus: true
            },
            {
                value: '关闭'
            }
        ]
    }).showModal();
    
    $(".chosen-select").chosen({
        disable_search_threshold: 10
    });
}

//新建联系人
function addContactsHtml(){
    var html = '';

    html = '<div class="ui-row"><div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">材质表面</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="材质表面" class="chosen-select ui-col">';
    html += '<option value=""></option>';
    html += '<option value="304/2B">304/2B</option>';
    html += '</select></div></div>';

    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">生产厂家</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="生产厂家" class="chosen-select ui-col">';
    html += '<option value=""></option>';
    html += '<option value="不锈钢有限公司">不锈钢有限公司</option>';
    html += '</select></div></div>';

    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">宽度</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="宽度" class="chosen-select ui-col">';
    html += '<option value=""></option>';
    html += '<option value="5000">5000</option>';
    html += '</select></div></div>';

    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">厚度</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="厚度" class="chosen-select ui-col chosen-thick" multiple>';
    html += '<option value=""></option>';
    html += '<option value="0.4">0.4</option>';
    html += '<option value="范围">范围</option>';
    html += '</select></div>';
    html += '<div class="ui-form-group ui-col client-inline">';
    html += '<input type="text" class="ui-input-control ui-col ui-col-20" placeholder="最小厚度">';
    html += '<span class="ui-txt-muted ui-col ui-col-8">—</span>';
    html += '<input type="text" class="ui-input-control ui-col ui-col-20" placeholder="最大厚度">';
    html += '</div></div>';

    html += '<div class="ui-form-group ui-col ui-mb0">';
    html += '<label class="ui-label-control ui-col ui-col-20">公差</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="公差" class="chosen-select ui-col">';
    html += '<option value=""></option>';
    html += '<option value="小差">小差</option>';
    html += '<option value="大差">大差</option>';
    html += '<option value="正常公差">正常公差</option>';
    html += '</select></div></div>';

    html += '</div>';

    var d = dialog({
        width: "500",
        height: "400",
        fixed: true,
        skin: "crm-form",
        title: '新建联系人',
        content: html,
        button: [
            {
                value: '保存',
                callback: function () {
                    return false;
                },
                autofocus: true
            },
            {
                value: '关闭'
            }
        ]
    }).showModal();
    
    $(".chosen-select").chosen({
        disable_search_threshold: 10
    });
}

//新建地址
function pushAddressHtml(){
    var html = '';

    html = '<div class="ui-row">';
    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">地址类型</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<select data-placeholder="地址类型" class="chosen-select ui-col">';
    html += '<option value=""></option>';
    html += '<option value="办公地址">办公地址</option>';
    html += '</select></div></div>';

    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">所在城市</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<div class="distCity">';
    html += '<select class="ui-col col-120 ui-mr18" data-province="-- 省 --"></select>';
    html += '<select class="ui-col col-120 ui-mr18" data-city="-- 市 --"></select>';
    html += '<select class="ui-col col-120" data-district="-- 区/县 --"></select>';
    html += '</div></div></div>';

    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">详细地址</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<input type="text" class="ui-input-control">';
    html += '</div></div>';

    html += '<div class="ui-form-group ui-col">';
    html += '<label class="ui-label-control ui-col ui-col-20">邮政编码</label>';
    html += '<div class="ui-col ui-col-75">';
    html += '<input type="text" class="ui-input-control">';
    html += '</div></div>';

    html += '</div>';

    var d = dialog({
        width: "500",
        fixed: true,
        skin: "crm-form",
        title: '新建联系地址',
        content: html,
        button: [
            {
                value: '保存',
                callback: function () {
                    return false;
                },
                autofocus: true
            },
            {
                value: '关闭'
            }
        ]
    }).showModal();

    $(".distCity").distpicker();
    
    $(".chosen-select").chosen({
        disable_search_threshold: 10
    });
}