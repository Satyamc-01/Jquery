$(document).ready(function () {

    var d = new Date();
    var month = d.getMonth();
    var year = d.getFullYear();
    var currentmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var bool = false;
    var x = currentmonth.indexOf($("#gomonth").val());
    var color_part = 0;

    /*------------------left-click on arrow---------------------------*/
    $('.left-arrow').click(function () {
        prev_month();
        color_part = 0;
    });

    /*------------------right-click on arrow---------------------------*/
    $('.right-arrow').click(function () {
        next_month();
        color_part = 0;

    });

    //previous month (left click)
    function prev_month() {
        d.setMonth(d.getMonth() - 1);
        clearcal();
        cal();
    }

    //next month (right click)
    function next_month() {
        d.setMonth(d.getMonth() + 1);
        clearcal();
        cal();
    }

    function clearcal() {
        // $('.dispmonth h2').empty();
        $(".appenddays").empty();
    }

    //for year from 1970 - 2070
    for (let k = 1970; k < 2070; k++) {
        $("#goyear").append(`<option value="${k}">${k}</option>`)
        $("#goyear").val(year);
    }

    //for month
    for (k = 0; k < 12; k++) {
        $("#gomonth").append(`<option value="${currentmonth[k]}">${currentmonth[k]}</option>`)
        $("#gomonth").val(currentmonth[month]);
    }

    //for April on first time
    for (k = 1; k < 31; k++) {
        $("#godate").append(`<option value ="${k}">${k}</option>`)
    }

    function cal() {

        x = currentmonth.indexOf($("#gomonth").val());

        currentmonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        var month = d.getMonth();
        var year = d.getFullYear();
        var date = d.getDate();
        var firstDay = new Date(year, month, 1);
        var startprint = firstDay.getDay();

        var totdays = new Date(year, month + 1, 0).getDate();
        var currentdate = new Date();


        $('.dispmonth h2').text(currentmonth[month] + '-' + year);

        var count = 0, new_count = 0;
        for (i = 0; i < 7; i++) {
            $(".appenddays").append("<tr>");
            for (j = 0; j < 7; j++) {
                count++;

                if (count > startprint) {
                    ++new_count;
                    if (new_count == currentdate.getDate() && month == currentdate.getMonth() && year == currentdate.getFullYear()) {
                        $(".appenddays").append(`<td class="today">${new_count}</td>`);

                    }
                    else if (new_count == date && new_count == color_part) {
                        $(".appenddays").append(`<td class="findate">${new_count}</td>`)
                    }
                    else if (new_count - 1 == totdays) {
                        return false;
                    }
                    else {
                        $(".appenddays").append(`<td>${new_count}</td>`);
                    }
                }
                else {
                    $(".appenddays").append(`<td></td>`);
                }
            }
            $(".appenddays").append("</tr>");
        }
    }

    cal(bool);


    $("#gomonth").change(function () {
        x = currentmonth.indexOf($("#gomonth").val());
        $("#godate").find("option").remove();
        totdays = new Date($("#goyear").val(), x + 1, 0).getDate();
        for (var k = 1; k <= totdays; k++) {
            if (k == 1) {
                $("#godate").append(`<option>Date</option>`)
            }
            $("#godate").append(`<option value="${k}">${k}</option>`)
        }
        console.log(totdays);
    })

    /*------------------find-date(get and set value----------------------*/
    $("#finddate").click(function () {
        year = $("#goyear").val();
        month = $("#gomonth").val();
        date = $("#godate").val();

        // x = currentmonth.indexOf($("#gomonth").val());
        if (date > 0) {
            d.setMonth(x)
            d.setFullYear(year);
            d.setDate(date);
            $(".appenddays").empty();
            color_part = date;
            cal();
        }
        if (bool == false) {
            d.setMonth(x)
            d.setFullYear(year);
            $(".appenddays").empty();
            cal();
            color_part = 0;
        }
    });

    $(".gotoday").click(function () {
        d = new Date();
        clearcal();
        cal();
        color_part = 0;
    })

});