$(document).ready(function () {

    var s = $(".block").length
    $(".details").append(`
    <table class="tab1">
    <thead>
    <tr></tr>
    </thead>
    <tbody>
    </tbody>
    </table>`)


    $(".addmore").click(function () {
        bootbox.confirm("Do you want to add", function (result) {
            if (result == true) {
                $(".block1").append(`
        <div class="block clearfix">
            <div class="inside-btn fl">
                <input type="text" class="title" placeholder="Title">
                <button type="button" class="addchild">Add Child</button>
                <button type="button" class="delete">Delete</button>
            </div>
        </div>
        `)
                $(".details").append(`
        
        <table class="tab1">
        <thead>
        <tr></tr>
        </thead>
        <tbody>
        </tbody>
        </table>`)
            }
        });





    })




    $("body").on("click", ".addchild", function () {
        var xa = this
        bootbox.confirm("You want to add subtitle?", function (result) {
            if (result == true) {
                var position = $(".addchild").index(xa)

                $(".inside-btn").eq(position).append(`
                    <div class="child fl">
                    <input type="text" class="subtitle" placeholder="Subtitle">
                    <input type="text" class="value" placeholder="Value">
                    <button type="button" class="delete1">Delete</button>
                </div>
                `)
            }

        });
    })

    $("body").on("click", ".delete", function () {

        var s = $(this).parents(".block").find(".child").length
        var parent = $(this).parents().find(".block").length;
        var aaa = this
        if (s == 0) {
            if(parent==1){
                return
            }
            // bootbox.confirm("You want to delete??", function (result) {
            //     if (result == true) {
                    console.log("s, delindex");
                    if (parent > 1) {

                        var delindex = $(".delete").index(aaa)
                        $(".block").eq(delindex).remove()
                        $(".tab1").eq(delindex).remove()
                    }
                }
        //     });
        // }
    })

    $(".block1").on("click", ".delete1", function () {
        var c = this
        bootbox.confirm("You want to delete??", function (result) {
            if (result == true) {
                var childdlt = $(".delete1").index(c)
                $(".child").eq(childdlt).remove()
                $("tbody tr").eq(childdlt).remove()
            }

        });
    })

    $("body").on("keyup", ".title", function () {

        var pos = $(this).parent().parent().index();
        var b = $(this).parents(".block").find(".child").length//childlength
        $("table").eq(pos).find("th").remove()
        var a = $(this).parents(".block").find(".title").val()
        if (a == "") {
            $("table").eq(pos).find("thead tr").addClass("blank")
        }
        else {
            $("table").eq(pos).find("thead tr").removeClass("blank")
        }
        $(this).parents().find("table thead tr").eq(pos).append(`
        <th colspan=2>${a}</th>
        `)
    })
    $("body").on("keyup", ".subtitle,.value", function () {

        var pos1 = $(this).parent().parent().parent().index();
        var b = $(this).parents(".block").find(".child").length//childlength
        $("table").eq(pos1).find("th").remove()
        $("table").eq(pos1).find("tbody").eq(0).empty()
        $("table").eq(pos1).find("tbody").eq(1).empty()
        var a = $(this).parents(".block").find(".title").val()
        $(this).parents().find("table thead tr").eq(pos1).append(`
        <th colspan=2>${a}</th>
        `)

        for (i = 0; i < b; i++) {
            var subtitle = $(this).parents(".block").find(".subtitle").eq(i).val()
            var value = $(this).parents(".block").find(".value").eq(i).val()
                if (subtitle == "" && value == "") {
                    continue
                }
                else {
                  
                    $("table").eq(pos1).find("tbody").append(`<tr>
                        <td>${subtitle}</td>
                        <td>${value}</td>
                        </tr> `)
                }
            
        }


    })

});
