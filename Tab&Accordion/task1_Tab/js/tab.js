$(document).ready(function () {
    $(".b").hide();
    $(".b").eq(0).show();
    $(".xyz").click(function () {
        x = $(this).index();
        $(".b").hide();
        $(".b").eq(x).show();
    });
});
