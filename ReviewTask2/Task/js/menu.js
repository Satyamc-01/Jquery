$(document).ready(function () {


    var one ;
    var maincount = 0;
    var listcount = 0;
    $(".update").hide();

    $(".add").click(function () {
        if ($(".child option:selected").text() == "Select Child" && ($(".menu").val() != "")) {

            var menutop = $(".menu").val()
            maincount++
            $(".details").append(`
<ul class="main"><li ${maincount}>${menutop} <button type="button" class="edit">edit</button><button type="button" class="remove">remove</button></li>

</ul>`)
            $(this).parent().find(".child").append(`<option class="1${maincount}">${menutop}</option>`)
            $(".menu").val("")

        } else {
            if ($(".menu").val() != "") {
                listcount++
                var menutop = $(".menu").val()
                var selectedval = $(".child option:selected").attr("class")
                $(".details").find(`.${selectedval}`).append(`<ul class="sub">
            <li class=l${listcount}>${menutop}
            <button type="button" class="edit">edit</button><button type="button" class="remove">remove</button></li>
            </ul>`)
                for (i = 0; i >= listcount; i++) {
                    $(".select").append(`<select class="child"><option value="none">${menutop}</option></select>`)
                }
            }
            $(".menu").val("")
        }
    });
    $(".details").on("click", ".remove", function () {
        a = $(this).parent().attr("class");// index of main parent
        $(".select").find(`.${a}`).remove()
        $(this).parent().remove()
        $(".edit").attr("disabled", false)


    });
    $(".details").on("click", ".edit", function () {
        $(".edit").attr("disabled", true)
        $(".update").show();
        $(".add").hide();
        var b = $(this).parent().text()
        console.log(b);

        var sp = b.substring(0, b.indexOf(" "))
        // console.log(sp)
        $(".menu").val(sp)
    });




    $(".inside-btn").on("click", ".update", function () {
        one = $(".edit").parent().attr("class")
        $(".update").hide();
        $(".add").show();
        var menutop = $(".menu").val()
        $(".edit").attr("disabled", false)
        $(".details").find(`.${one}`).empty()
        $(".details").find(`.${one}`).append(`${menutop}
    <button type="button" class="edit">edit</button><button type="button" class="remove">remove</button>`)

    })
});

// $(document).ready(function () {
//     var maincount = 0;

//     $(".update").hide()
//     $(".add").click(function () {
//         maincount++
//         menutop = $(".menu").val()
//         $(this).parent().find(".child").append(`<option class="1${maincount}">${menutop}</option>`)

//         $(".details").append(`
//         <ul class="main"><li ${maincount}>${menutop} <button type="button" class="edit">edit</button><button type="button" class="remove">remove</button></li>
//         </ul>`)
//         if ($(".child option:selected").text() == "Select Child") {
//             var selectedval = $(".child option:selected").attr("class")
//             $(".details").find(`.${selectedval}`).append(`<ul class="sub">
//                <li class=l${maincount}>${menutop}
//                <button type="button" class="edit">edit</button><button type="button" class="remove">remove</button></li>
//                </ul>`)
//         }
//         $(".select").append(`<select class="child"><option value="none">${menutop}</option></select>`)


//     });
// });

