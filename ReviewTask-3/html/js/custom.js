$(document).ready(function () {

    var first_arr = [
        "fa fa-phone",
        "fa fa-eraser",
        "fa fa-exchange",
        "fa fa-eye",
        "fa fa-eyedropper",
        "fa fa-fax",
        "fa fa-feed",
        "fa fa-flash",
        "fa fa-futbol-o",
        "fa fa-gamepad",
        "fa fa-group",
        "fa fa-gift",
        "fa fa-home",
        "fa fa-hotel",
        "fa fa-image",
        "fa fa-info",
        "fa fa-industry",
        "fa fa-institution",
        "fa fa-industry",
        "fa fa-magic",
        "fa fa-lock",
        "fa fa-minus",
        "fa fa-mobile",
        "fa fa-music",
        "fa fa-percent",
        "fa fa-plus",
        "fa fa-plug",
        "fa fa-qrcode",
        "fa fa-question",
        "fa fa-random",
        "fa fa-road",
        "fa fa-rocket",
        "fa fa-rss",
        "fa fa-search",
        "fa fa-share",
        "fa fa-ship",
        "fa fa-tag",
        "fa fa-tags",
        "fa fa-tasks",
        "fa fa-taxi",
        "fa fa-television",
        "fa fa-terminal",
        "fa fa-tint",
        "fa fa-tv",
        "fa fa-umbrella",
        "fa fa-tty",
        "fa fa-user",
        "fa fa-vcard",
        "fa fa-upload",
        "fa fa-unlock"
    ];
    // var number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,24,25,26,27,28,29,30,31,32,33,34,35]
    var new_icon = []
    var icon_arr = []
    var num = []
    var ccount = 0;
    var count = 0;
    var x;
    var icon;
    var a, b;
    var hours = 0;
    var minutes = 0;
    var sec = 0;
    var csec = 0;
    var timer
    var bool = true;
    $(".stopwatch-begins").hide()

    $(".submit").click(function () {
        $(".box").remove()
        // $(".submit").attr("disabled", true)
        hours = 0;
        minutes = 0;
        sec = 0;
        csec = 0;   
        clearInterval(timer)
        global()
        var inputval = $(".input").val()
        var number = []
        for (m = 0; m < inputval; m++) {
            number.push(m)
        }
        for (i = 0; i < inputval / 2; i++) {
            icon = Math.floor(Math.random() * first_arr.length)
            icon_arr.push(first_arr[icon])
            new_icon.push(first_arr[icon])
            first_arr.splice(icon, 1)
        }
        var final_arr = icon_arr.concat(new_icon);
        for (j = 0; j < inputval; j++) {
            icon = Math.floor(Math.random() * number.length)
            num.push(number[icon])
            number.splice(icon, 1)
        }
        for (k = 0; k < inputval; k++) {
            $(".boxes").append(`<div class="box"><i class= "${final_arr[num[k]]}" aria-hidden="true"></i></div>`)
        }

    })
    // $(document).on("click", ".refresh", function () {
    //     // $(".box").removeClass("bg1").removeClass("bg2").addClass("bg3")
    //     $(".box").remove()
    //     $(".submit").attr("disabled", false)
    //     hours = 0;
    //     minutes = 0;
    //     sec = 0;
    //     csec = 0;
    //     global()

    //     clearInterval(timer)
    //     var inputval = $(".input").val()
    //     var number = []
    //     for (m = 0; m < inputval; m++) {
    //         number.push(m)
    //     }
    //     for (i = 0; i < inputval / 2; i++) {
    //         var icon = Math.floor(Math.random() * first_arr.length)
    //         icon_arr.push(first_arr[icon])
    //         new_icon.push(first_arr[icon])
    //         first_arr.splice(icon, 1)
    //     }
    //     var final_arr = icon_arr.concat(new_icon);
    //     for (j = 0; j < inputval; j++) {
    //         icon = Math.floor(Math.random() * number.length)
    //         num.push(number[icon])
    //         number.splice(icon, 1)
    //     }
    //     for (k = 0; k < inputval; k++) {
    //         $(".boxes").append(`<div class="box"><i class= "${final_arr[num[k]]}" aria-hidden="true"></i></div>`)
    //     }

    // });




    //clickevent (on counting click)
    $(document).on("click", ".box", function () {
        var inputval = $(".input").val()
        if (bool == true) {
            startTimer(hours, minutes, sec, csec);
        }
        if ($(this).hasClass("bg1") != true) {
            if (ccount == 0) {
                x = this
                a = $(this).find("i").attr("class")
                $(this).removeClass("bg3").addClass("bg2")
                ccount++
            }
            else if (ccount == 1) {
                if (!$(this).hasClass("bg2")) {
                    b = $(this).find("i").attr("class")
                    $(this).removeClass("bg3").addClass("bg2")
                    if (a == b) {
                        $(x).removeClass("bg3").removeClass("bg2").addClass("bg1")
                        $(this).removeClass("bg3").removeClass("bg2").addClass("bg1")
                    }
                    else {
                        // for delay
                        setTimeout(() => {
                            $(this).addClass("bg3").removeClass("bg2")
                            $(x).addClass("bg3").removeClass("bg2")
                        }, 500);
                    }
                    ccount = 0
                }
            }
            if ($(".box.bg1").length == inputval) {
                console.log("hi");
                timer
                hours = parseInt($("th").eq(0).text())
                minutes = parseInt($("th").eq(1).text())
                sec = parseInt($("th").eq(2).text())
                csec = parseInt($("th").eq(3).text())
                setTimeout(() => {
                    alert(+minutes + ":m" + sec + "s:" + csec + "")

                }, 100);

                clearInterval(timer)
            }
        }

    })
    function startTimer(hours, minutes, sec, csec) {
        timer = setInterval(function () {
            csec++;
            if (csec > 99) {
                csec = 0;
                sec++;
                if (sec > 59) {
                    sec = 0;
                    minutes++;
                    if (minutes > 59) {
                        minutes = 0
                        hours++;
                    }
                }
            }
            $("th").eq(0).text((hours < 10) ? ('0' + hours) : hours);
            $("th").eq(1).text((minutes < 10) ? ('0' + minutes) : minutes);
            $("th").eq(2).text((sec < 10) ? ('0' + sec) : sec);
            $("th").eq(3).text((csec < 10) ? ('0' + csec) : csec);
        }, 10);
        bool = false;
    }
    function global() {
        var first_arr = [
            "fa fa-phone",
            "fa fa-eraser",
            "fa fa-exchange",
            "fa fa-eye",
            "fa fa-eyedropper",
            "fa fa-fax",
            "fa fa-feed",
            "fa fa-flash",
            "fa fa-futbol-o",
            "fa fa-gamepad",
            "fa fa-group",
            "fa fa-gift",
            "fa fa-home",
            "fa fa-hotel",
            "fa fa-image",
            "fa fa-info",
            "fa fa-industry",
            "fa fa-institution",
            "fa fa-industry",
            "fa fa-magic",
            "fa fa-lock",
            "fa fa-minus",
            "fa fa-mobile",
            "fa fa-music",
            "fa fa-percent",
            "fa fa-plus",
            "fa fa-plug",
            "fa fa-qrcode",
            "fa fa-question",
            "fa fa-random",
            "fa fa-road",
            "fa fa-rocket",
            "fa fa-rss",
            "fa fa-search",
            "fa fa-share",
            "fa fa-ship",
            "fa fa-tag",
            "fa fa-tags",
            "fa fa-tasks",
            "fa fa-taxi",
            "fa fa-television",
            "fa fa-terminal",
            "fa fa-tint",
            "fa fa-tv",
            "fa fa-umbrella",
            "fa fa-tty",
            "fa fa-user",
            "fa fa-vcard",
            "fa fa-upload",
            "fa fa-unlock"
        ];
        new_icon = []
        icon_arr = []
        num = []
        x;
        ccount;
        icon;
        bool = true;
        timer
    }
});