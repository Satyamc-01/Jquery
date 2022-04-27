$(document).ready(function () {
    var x = ""; // string
    var new_str = ""


    $("#calculate").keypress(function (e) {
        e.preventDefault();
    })

    $("button").click(function () {
        $(".error").text("")
        $(this).blur();
        x = $("#calculate").val();

        if (($(this).attr("id") != "equals") && ($(this).attr("id") != "multiply") && ($(this).attr("id") != "root") && ($(this).attr("id") != "square")) {
            x += $(this).text();
            $("#calculate").val(x);
        }
        //All Clear
        if ($(this).attr("id") == "allClear") {
            $("#calculate").val("");
            x = "";
        }
        //Backspace
        if ($(this).attr("id") == "delete") {
            // x = x.slice(0, -1);
            // $("#calculate").val(x)
        }
        //Multiply
        if ($(this).attr("id") == "multiply") {
            x += "*"
            $("#calculate").val(x);
        }
        //sqrt
        if ($(this).attr("id") == "root") {
            x += "√ "
            $("#calculate").val(x);
        }
        //square
        if ($(this).attr("id") == "square") {
            x += "²"
            $("#calculate").val(x);
        }
        //equals
        if ($(this).attr("id") == "equals") {
            try {
                new_str = $("#calculate").val();
                var a = new_str.replace(/[²]/g, "**2 ");
                var b = a.replace(/[√]/g, "**0.5 ");
                var answer = eval(b)
                new_str = "";
                $("#calculate").val(answer);
            }
            catch (error) {
                if (error instanceof SyntaxError) {
                    $(".error").text("Malformed expression");
                } else if (error instanceof ReferenceError) {
                    $(".error").text("Malformed expression");
                } else if (error instanceof TypeError) {
                    $(".error").text("Malformed expression");
                } else {
                    $(".error").text(error);
                }
            }
        }
    });

    //binding keyboard via keycode
    $("body").keydown(function (e) {
        $(".error").text("")

        if (e.keyCode == 13) {
            try {
                for (let i = 0; i < x.length - 1; i++) {
                    if (x.charAt(i) == "/" && x.charAt(i + 1) == "/") {
                        throw "Malformed Expressions"
                    }
                }
                new_str = $("#calculate").val();
                answer = eval(new_str);
                x = "";
                $("#calculate").val(answer);
            }
            // catch eroor
            catch (error) {
                if (error instanceof SyntaxError) {
                    $(".error").text("Malformed expression");
                } else if (error instanceof ReferenceError) {
                    $(".error").text(" Malformed expression");
                } else if (error instanceof TypeError) {
                    $(".error").text(" Malformed expression");
                }
                else {
                    $(".error").text(error);
                }
            }
        }
        if (e.keyCode == 8) {
            $("button#delete").click();
            e.preventDefault();
        }
        if (e.keyCode == 27) {
            $("#calculate").val("");
            x = "";
        }
        if (e.keyCode == 57 && e.shiftKey) {
            $("#bracket1").click();
        }
        else if (e.keyCode == 48 && e.shiftKey) {
            $("#bracket2").click();
        }
        else if (e.keyCode == 53 && e.shiftKey) {
            $("#modulo").click();
        }
        else if (e.keyCode == 56 && e.shiftKey || e.keyCode == 106) {
            $("#multiply").click();
        }
        else if ((e.keyCode == 187 && e.shiftKey) || e.keyCode == 107) {
            $("#add").click();
        }
        else if ((e.keyCode == 189) || e.keyCode == 109) {
            $("#minus").click();
        }
        else if (e.keyCode == 191 || e.keyCode == 111) {
            $("#divide").click();
        }
        else if (e.keyCode == 48 || e.keyCode == 96) {
            $("button#0").click();
        }
        else if (e.keyCode == 49 || e.keyCode == 97) {
            $("button#1").click();
        }
        else if (e.keyCode == 50 || e.keyCode == 98) {
            $("button#2").click();
        }
        else if (e.keyCode == 51 || e.keyCode == 99) {
            $("button#3").click();
        }
        else if (e.keyCode == 52 || e.keyCode == 100) {
            $("button#4").click();
        }
        else if (e.keyCode == 53 || e.keyCode == 101) {
            $("button#5").click();
        }
        else if (e.keyCode == 54 || e.keyCode == 102) {
            $("button#6").click();
        }
        else if (e.keyCode == 55 || e.keyCode == 103) {
            $("button#7").click();
        }
        else if (e.keyCode == 56 || e.keyCode == 104) {
            $("button#8").click();
        }
        else if (e.keyCode == 57 || e.keyCode == 105) {
            $("button#9").click();
        }
        else if (e.keyCode == 190 || e.keyCode == 110) {
            $("button#dot").click();
        }
    });
});