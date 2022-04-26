$(document).ready(function () {
    var x = "";
    var new_str = ""
    $("#calculate").focus()
    $("body").click(function () {

        $("#calculate").focus()
    })
    $("button").click(function () {
        $(".error").text(" ")

        // $("#calculate").focus()
        x = $("#calculate").val();
        if (($(this).attr("id") != "equals") && ($(this).attr("id") != "multiply") && ($(this).attr("id") != "root") && ($(this).attr("id") != "square")) {
            x += $(this).text();
            $("#calculate").val(x);
        }
        // $("#calculate").val(x)
        // console.log(x)
        if ($(this).attr("id") == "allClear") {
            $("#calculate").val("");
            x = "";
        }
        if ($(this).attr("id") == "delete") {
            // x = ($(this).text());
            x = x.slice(0, -1);
            $("#calculate").val(x)
            // console.log(x);
        }
        if ($(this).attr("id") == "multiply") {
            x += "*"
            $("#calculate").val(x);
        }
        if ($(this).attr("id") == "root") {
            x += "√"
            // var value = value.replace("²", "**0.5");

            $("#calculate").val(x);
        }

        if ($(this).attr("id") == "square") {
            // x = (Math.pow(x, 2))
            x += "²"
            $("#calculate").val(x);
        }
        if ($(this).attr("id") == "equals") {
            try {
                new_str = $("#calculate").val();

                var a = new_str.replace(/[²]/g, "**2 ");
                var b = a.replace(/[√]/g, "**0.5 ");

                answer = eval(b)
                new_str = "";
                $("#calculate").val(answer);


            }
            catch (error) {
                if (error instanceof SyntaxError) {
                    $(".error").text("Error in Syntax");
                } else if (error instanceof ReferenceError) {
                    $(".error").text(" Malformed expression");
                } else if (error instanceof TypeError) {
                    $(".error").text(" Malformed expression");
                } else {
                    $(".error").text(error);
                }
            }

        }
    });
    $("#calculate").keydown(function (e) {
        // $("#calculate").focus()
        $(".error").text(" ")

        if (e.keyCode == 13) {
            try {
                new_str = $("#calculate").val();
                answer = eval(new_str);
                x = "";
                $("#calculate").val(answer);
            }
            catch (error) {
                if (error instanceof SyntaxError) {
                    $(".error").text("Error in Syntax");
                } else if (error instanceof ReferenceError) {
                    $(".error").text(" Malformed expression");
                } else if (error instanceof TypeError) {
                    $(".error").text(" Malformed expression");
                } else {
                    $(".error").text(error);
                }
            }
        }
        if (e.keyCode == 27) {
            $("#calculate").val("");
            x = "";
        }

    });

});