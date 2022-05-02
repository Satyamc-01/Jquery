$(document).ready(function () {
    var h, m, s, c = 0;
    $('p').hide();
    $('p').eq(2).show();
    $('.resume').hide();
    $(".tag").html("<h3>: Enter Seconds").css({"color":"red"})
    $('.restart').hide();
    var timer;
    
    $('.start').click(function () {
        $('p').eq(0).show();
        $('p').eq(2).hide();

        var inputValue = $('#num').val();
        
        h = Math.floor(inputValue / 3600);
        m = Math.floor((inputValue - (h * 3600)) / 60);
        s = Math.floor((inputValue - (h * 3600) - (m * 60)));
        c = 0;

        $("th").eq(0).text(h);
        $("th").eq(1).text(m);
        $("th").eq(2).text(s);
        $("th").eq(3).text(c);

        startTimer();
        console.log(inputValue, h, m, s, c);
        $('.start').attr('disabled', true);
    });

    $('.restart').click(function () {
        $('p').eq(0).show();
        $('p').eq(2).hide();
        var inputValue = $('#num').val();

        h = Math.floor(inputValue / 3600);
        m = Math.floor((inputValue - (h * 3600)) / 60);
        s = Math.floor((inputValue - (h * 3600) - (m * 60)));
        c = 0;

        $("th").eq(0).text(h);
        $("th").eq(1).text(m);
        $("th").eq(2).text(s);
        $("th").eq(3).text(c);

        startTimer();
        console.log(inputValue, h, m, s, c);
        $('.start').show();
        $('.restart').hide();
    });


    $('.reset').click(function () {
        $('p').hide();
        $(".tag").html("<h3>: Enter seconds ")
        $('#num').val("");
        $("th").text(0);
        clearInterval(timer);
        $('.start').show();
        $('.restart').hide();
        $('.resume').hide();
        $('.start').attr('disabled', false);

    });

    $('.pause').click(function () {
        $('p').hide();


        h = $("th").eq(0).text();
        m = $("th").eq(1).text();
        s = $("th").eq(2).text();
        c = $("th").eq(3).text();
        $(".tag").html("<h3>:pause at" + h + "HH, " + m + "MM, " + s + "SS")
        clearInterval(timer)

        $('.resume').show();
        $('.start').hide();
        $('.restart').hide();
    });

    $('.resume').click(function () {
        $(".tag").html("<h3> Running")

        h = $("th").eq(0).text();
        m = $("th").eq(1).text();
        s = $("th").eq(2).text();
        c = $("th").eq(3).text();
        startTimer();


        $('.resume').hide();
        $('.start').show();
        $('p').eq(0).show();
    })

    $('.stop').click(function () {
        clearInterval(timer)
        $(".tag").html("<h3>: Stopped")
        $(".start").hide();
        $(".resume  ").hide();
        $(".restart").show();

    });
    function startTimer() {
        timer = setInterval(function () {
            if (c > 0) {
                c--;
            } else {
                c = 99;
                if (s > 0) {
                    s--;
                } else {
                    s = 59;
                    if (m > 0) {
                        m--;
                    } else {
                        m = 59
                        if (h > 0) {
                            h--;
                        } else {
                            h, m, s, c = 0;
                        }
                    }
                }
            }
            if (h == 0 && m == 0 && s == 0 && c == 0) {
                clearInterval(timer);
            }
            $("th").eq(0).text(h);
            $("th").eq(1).text(m);
            $("th").eq(2).text(s);
            $("th").eq(3).text(c);

            $(".tag").html("<h3>: Running")
        }, 10);
    }
});