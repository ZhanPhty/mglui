var picker = new Pikaday({
    field: $("#datepicker")[0],
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000,2020],
    onSelect: function() {
        var date = document.createTextNode(this.getMoment().format("YYYY-MM-DD") + " ");
    }
});

var picker = new Pikaday({
    field: $("#datepicker2")[0],
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000,2020],
    onSelect: function() {
        var date = document.createTextNode(this.getMoment().format("YYYY-MM-DD") + " ");
    }
});

//2个月
var picker2months = new Pikaday({
    numberOfMonths: 2,
    field: $("#datepicker-2months")[0],
    firstDay: 1,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2000, 2020],
    onSelect: function() {
        var date = document.createTextNode(this.getMoment().format("YYYY-MM-DD") + " ");
    }
});

//区间日期选择
var startDate,
    endDate,
    updateStartDate = function() {
        startPicker.setStartRange(startDate);
        endPicker.setStartRange(startDate);
        endPicker.setMinDate(startDate);
    },
    updateEndDate = function() {
        startPicker.setEndRange(endDate);
        startPicker.setMaxDate(endDate);
        endPicker.setEndRange(endDate);
    },
    startPicker = new Pikaday({
        field: document.getElementById("datepicker-start"),
        minDate: new Date(),
        maxDate: new Date(2020, 12, 31),
        onSelect: function() {
            startDate = this.getDate();
            updateStartDate();
        }
    }),
    endPicker = new Pikaday({
        field: document.getElementById("datepicker-end"),
        minDate: new Date(),
        maxDate: new Date(2020, 12, 31),
        onSelect: function() {
            endDate = this.getDate();
            updateEndDate();
        }
    }),
    _startDate = startPicker.getDate(),
    _endDate = endPicker.getDate();

if (_startDate) {
    startDate = _startDate;
    updateStartDate();
}

if (_endDate) {
    endDate = _endDate;
    updateEndDate();
}


//日期主题
var pickerTheme = new Pikaday({
    field: document.getElementById("datepicker-theme"),
    theme: "dark-theme"
});

var pickerTriangle = new Pikaday({
    field: document.getElementById("datepicker-icon")
});

//点击图标
var pickerButton = new Pikaday({
    field: document.getElementById("datepicker-b"),
    trigger: document.getElementById("datepicker-button"),
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(2020, 12, 31),
    yearRange: [2010, 2020]
});

