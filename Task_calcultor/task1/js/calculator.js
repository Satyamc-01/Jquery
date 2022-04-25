$(document).ready(function () {
    var x = "";
    var new_str = ""
    $("#calculate").focus()
    $("body").click(function () {
        
        $("#calculate").focus()
    })
    $("button").click(function () {
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
                    $("#calculate").val("Error in Syntax");
                } else if (error instanceof ReferenceError) {
                    $("#calculate").val("NO Reference");
                } else if (error instanceof TypeError) {
                    $("#calculate").val("Type Error ");
                } else {
                    $("#calculate").val(error);

                }
            }

        }
    });
    $("#calculate").keydown(function (e) {
        // $("#calculate").focus()
        if (e.keyCode == 13) {
            new_str = $("#calculate").val();
            answer = eval(new_str);
            x = "";
            $("#calculate").val(answer);
        }
        if (e.keyCode == 27) {
            $("#calculate").val("");
            x = "";
        }

    });
    // function sqroot(
    //     if (x.includes("√")) {
    //         y = x.indexOf("√")
    //         z = x.indexOf("+", y)
    //         console.log(x,y);
    //         if (y + 1 == z || z < y) {
    //             z = x.indexOf("%", y)
    //             if (y + 1 == z || z < y) {
    //                 z = x.indexOf("-", y)
    //                 if (y + 1 == z || z < y) {
    //                     z = x.indexOf("/", y)
    //                     if (y + 1 == z || z < y) {
    //                         z = x.indexOf("*", y)
    //                         if (y + 1 == z || z < y) {
    //                             z = x.length;
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //         else {
    //             return x;
    //         }

    //         a = x.slice(y + 1, z)
    //         sqrt = Math.sqrt(parseInt(a));
    //         b = x.replace(/√[0-9]+/g, `${sqrt}`)
    //         answer = (eval(b));
    //         $("#calculate").val(answer);
    //         console.log(answer);

    //     }
    // )
    // new_str = new_str.replace(/²/g, "**2")
});