$(document).ready(function () {

    $(".entries div").hide();
    $(".entry1").eq(0).show();
    var x, length, i = 1, s = false;
    $(".tab button").eq(0).css({ "background-color": "wheat" })
    $(".display1").hide();

    /*------------------for Nav-Tab---------------------*/
    $(".tab button").click(function () {
        x = $(this).index();
        length = $(".entries div").length;
        $(".entries div").hide();
        $(".entries div").eq(x).show();
        $(".tab button").css({ "background-color": "aliceblue" })
        $(".tab button").eq(x).css({ "background-color": "wheat" })
    });

    // for Clean and standard template
    $(".template").click(function () {
        if ($(this).attr("id") == "clean") {
            $(".display").show();
            $(".display1").hide();
        }
        if ($(this).attr("id") == "standard") {
            $(".display").hide();
            $(".display1").show();
        }
    })

    // color
    $('#pcolor').change(function () {
        $('.c_back,.display1 .c_front').css('background-color', $(this).val());
    });
    $('#scolor').change(function () {
        $('.c_back,.c_front').css('color', $(this).val());
    });
    $('#tcolor').change(function () {
        $('.block,.display1 .block1').css('background-color', $(this).val());
    });

    // color reset
    $("#creset").click(function () {
        console.log("call test trigger")
        $("#pcolor,#scolor,#tcolor").val("black")
        $('.c_front,.c_back,.block,.block1').css({ "background-color": "white", "color": "black" })
    })

    // validation checking and pdf generate
    $("#download").click(function () {
        if ($("#form").valid() == true) {
            $('#name,#number,#email,#company,#website,#designation').val("");
            var doc = new jsPDF("p", "mm", "a4");
            html2canvas(document.querySelector('.display,.display1')).then(function (e) {
                var imgData = e.toDataURL('image/png');
                var pageHeight = 200;
                var imgWidth = (e.width * 50) / 300;
                console.log(e.width);
                var imgHeight = e.height * imgWidth / e.width;
                var heightLeft = imgHeight;
                var position = 50;
                doc.addImage(imgData, 'PNG', -20, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;
                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    doc.addPage();
                    doc.addImage(imgData, 'PNG', -20, position, imgWidth, imgHeight);
                    heightLeft -= pageHeight;
                }
                doc.output('dataurlnewwindow');
                doc.save(Date.now() + '.pdf');
            });
        }
    });

    // Create Regex Method
    $.validator.addMethod(
        "regex",
        function (value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        }, "Please check your input.");

    // Validator
    $("#form").validate({
        ignore: [],
        rules: {
            email: {
                required: true,
                regex: /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
            },
            name: {
                required: true,
                regex: /^[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/,
            },
            number: {
                required: true,
                regex: /^[0-9]{10}$/,
            },
            company: {
                required: true,
                regex: /^[a-zA-Z. ][a-zA-Z. ]+[a-zA-Z.]$/g
            },
            website: {
                required: true,
                regex: /^\b[A-Z0-9._%-]+\.[A-Z]{2,4}\b$/i
            },
            designation: {
                required: true,
                regex: /^\b[A-Za-z ]{2,}\b$/i
            },
            logo: {
                required: true
            }
        },
        messages: {
            name: { regex: "please enter full name" },
            company: { regex: "please enter valid input" },
            website: { regex: "valid website" },
            email: { regex: "Enter valid email" },
            number: { regex: "Enter valid number" },
        }
    });

    // Qr-Code generate
    $('.qr-url').on('keydown', function () {
        $('#qrcode,#qrcode1').empty();
        $('#qrcode,#qrcode1').qrcode({ text: $('.qr-url').val() });
    });

    // values of input field to template
    $("#company").on("keyup", function () {
        var company = $(this).val()
        $(".comp h3").text(company)
    })
    $("#logo").on("keyup", function () {
        logo = $(this).val()
        $(".display .clogo i").removeClass("fa-coffee")
        $(".display1 .clogo i").removeClass("fa-anchor")
        $(".clogo i").addClass(logo)
    })
    $(".qr-url").on("keyup", function () {
        var website = $(this).val()
        $(".dwebsite p").text(website)
    })
    $("#name").on("keyup", function () {
        var name = $(this).val()
        $(".dname h2").text(name)
    })
    $("#designation").on("keyup", function () {
        let designation = $(this).val()
        $(".ddesignation h3").text(designation)
    })
    $("#number").on("keyup", function () {
        let number = $(this).val()
        $(".dtel p").text(number)
    })
    $("#email").on("keyup", function () {
        let email = $(this).val()
        $(".demail p").text(email)
    })

    // reset
    $("#reset").click(function () {
        $("#creset").trigger("click")//trigger click event of creset
        $(".clogo i").removeClass(logo)
        $(".display1 .clogo i").addClass("fa-anchor")
        $(".display .clogo i").addClass("fa-coffee")
        $(".demail p").text("abc@gmail.com")
        $(".dtel p").text("7600051835")
        $(".ddesignation h3").text("designation")
        $(".dname h2").text("John Doe")
        $(".dwebsite p").text("https://www.weboccult.com")
        $(".comp h3").text("Company Name")
        $("input").val("")
        x = $(".tab button").index();
        length = $(".entries div").length;
        $(".entries div").hide()
        $(".entry1").show()
        $(".tab button").css({ "background-color": "aliceblue" })
        $(".tab button").eq(x).css({ "background-color": "wheat" })
        $("label.error").hide()
    })
});