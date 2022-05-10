$(document).ready(function () {
    $(".section").css({ padding: "10px", border: "1px solid black" })
    $(".b").not($(".b").eq(0)).hide();
    $(".section").click(function () {
        $(".b").slideUp();
        console.log("check if class exist", $(this).find('i').hasClass("fa-angle-right"));
        if ($(this).find('i').hasClass("fa-angle-right")) {
            $(this).find('i').removeClass("fa-angle-right").addClass("fa-angle-down")
        } else {
            $(this).find('i').removeClass("fa-angle-down").addClass("fa-angle-right")
        }   
        $(this).parent().siblings().find('i').removeClass("fa-angle-right").removeClass("fa-angle-down").addClass("fa-angle-right")
        $(this).siblings(".b").show();
    });
});