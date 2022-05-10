// $(document).ready(function () {
//     var maincount = 0;
//     var listcount = 0;
//     $(".update").hide();
//     $(".add").click(function () {
//         if ($(".child option:selected").text() == "Select Child" && ($(".menu").val() != "")) {
//             var menutop = $(".menu").val()
//             maincount++
//             $(".details").append(`
//     <ul class="main"><li class="1${maincount}">${menutop} <button type="button" class="edit">edit</button><button type="button" class="remove">remove</button></li>
//     </ul>`)
//             $(this).parent().find(".child").append(`<option class="1${maincount}">${menutop}</option>`)
//             $(".menu").val("")
//         } else {
//             if ($(".menu").val() != "") {
//                 listcount++
//                 var menutop = $(".menu").val()
//                 var selectedval = $(".child option:selected").attr("class")
//                 $(".details").find(`.${selectedval}`).append(`<ul class="sub">
//                 <li class=l${listcount}>${menutop}
//                 <button type="button" class="edit">edit</button><button type="button" class="remove">remove</button></li>
//                 </ul>`)
//                 $(".select").append(`<select class="child"><option value="1${maincount}">${menutop}</option></select>`)
//                 var selectedvall = $(`.${selectedval} option:selected`).attr("class")
//                 $(".details").find(`.${selectedvall}`).append(`<ul class="sub">
//                 <li class=l${listcount}>${menutop}
//                 <button type="button" class="edit">edit</button><button type="button" class="remove">remove</button></li>
//                 </ul>`)
//                 $(".menu").val("")
//             }
//         }
//     });

// });
$(document).ready(function () {
    var value, dropSelection, selectLength;
    count = 0

    $(".add").click(function () {
        value = $(".menu").val();
        // selectLength = $("select").length;

        dropSelection = ($("select").length == 1) ? ($("select").eq(0).val()) : (($("select").eq($("select").length - 1).val() == 'none') ? ($("select").eq($("select").length - 2).val()) : ($("select").eq($("select").length - 1).val()));
       
        if ($(".child option:selected").text() != 'Select-Child') {
            // console.log($(`.child${dropSelection}`).length);
            if ($(`.child${dropSelection}`).length == 0) {
                // console.log(dropSelection);
                $(".select").append(`
                    <select class="child${dropSelection}" name="selectChild">
                        <option value="none">none</option>
                    </select>
                `);
            }
        }
        if ($(".child option:selected").text() == 'Select-Child') {
            // $("select").not($("select").eq(0)).remove();
            $("select").eq(0).append(`<option value="${value}">${value}</option>`);
            $(".details").append(`
                <ul>
                    <li data=${value}>
                        ${value}
                        <input type="button" class="btn edit" value="Edit">
                        <input type="button" class="btn delete" value="Delete">
                    </li>
                </ul>
            `);
        }

        else {
            $("select").eq($("select").length - 1).append(`
                <option value="${value}">${value}</option>
            `)
            $(".details").find(`[data='${dropSelection}']`).append(`
                <ul>
                    <li data=${value}>
                        ${value}
                        <input type="button" class="btn edit" value="Edit">
                        <input type="button" class="btn delete" value="Delete">
                    </li>
                </ul>
            `);
        }
    });
    $(document).on('change', 'select', function () {
        // values = $(`.child${dropSelection} option:selected`).text() == 'none'
        //         val = $(this).index()
        val1 = $(this).val()
        if(val1 == 'none'|| $(".child option:selected").text() == 'Select-Child'){
            $(this).nextAll().hide()
            console.log("hi");
            console.log(val1);
        }
        else{
            $(this).next().show()
            console.log(dropSelection);
        }

        // if(value=="none"){
        //     console.log(value);
        //     $(".details").append(`
        //     <ul>
        //         <li data=${value}>
        //             ${value}
        //             <input type="button" class="btn edit" value="Edit">
        //             <input type="button" class="btn delete" value="Delete">
        //         </li>
        //     </ul>
        // `);
        // }
        // console.log(val,val1); 

    })
});





























    // $(".select").on('change','.child1', function () {
    //    console.log("hi");
    // })
    // $(".details").on("click", ".remove", function () {
    //     a = $(this).parent().attr("class");// index of main parent
    //     $(".select").find(`.${a}`).remove()
    //     $(this).parent().remove()
    //     $(".edit").attr("disabled", false)
    // });
    // $(".details").on("click", ".edit", function () {
    //     $(".edit").attr("disabled", true)
    //     $(".update").show();
    //     $(".add").hide();
    //     one = $(".edit").parent().attr("class")
    //     var b = $(this).parent().text()
    //     var sp = b.substring(0,b.indexOf(" "))
    //     $(".menu").val(sp)
    // });

    // $(".inside-btn").on("click",".update", function(){
    //     $(".update").hide();
    //     $(".add").show();
    //     var menutop = $(".menu").val()
    //     $(".edit").attr("disabled", false)
    //     $(".details").find(`.${one}`).empty()
    //     $(".details").find(`.${one}`).append(`${menutop}
    //     <button type="button" class="edit">edit</button><button type="button" class="remove">remove</button>`)
    // })
