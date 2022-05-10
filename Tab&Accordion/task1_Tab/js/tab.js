$(document).ready(function () {
    $(".b").hide().eq(0).show();
    $(".xyz").click(function () {
        x = $(this).index();
        $(".b").hide().eq(x).show();;
    });
});