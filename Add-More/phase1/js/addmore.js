$(document).ready(function () {


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
                <button type="button" class="submit">Submit</button>
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
        var aaa=this
        bootbox.confirm("You want to delete??", function (result) {
            if (result == true) {
                var delindex = $(".delete").index(aaa)
                $(".block").eq(delindex).remove()
                $(".tab1").eq(delindex).remove()
            }

        });


    })
    $(".block1").on("click", ".delete1", function () {
        var c=this
        bootbox.confirm("You want to delete??", function (result) {
            if (result == true) {
                var childdlt = $(".delete1").index(c)
                $(".child").eq(childdlt).remove()
            }
        });
    })

    $("body").on("click", ".submit", function () {

        var pos = $(".submit").index(this);
        var b = $(this).parents(".block").find(".child").length//childlength
        $("table").eq(pos).find("th").remove()
        $("table").eq(pos).find("tbody").empty()
        var a = $(this).parents(".block").find(".title").val()
        $(this).parents().find("table thead tr").eq(pos).append(`
        <th colspan=2>${a}</th>
        `)
        for (i = 0; i < b; i++) {
            var subtitle = $(this).parents(".block").find(".subtitle").eq(i).val()
            var value = $(this).parents(".block").find(".value").eq(i).val()
            console.log(subtitle, value);
            $("table").eq(pos).find("tbody").append(`<tr>
                <td>${subtitle}</td>
                <td>${value}</td>
                </tr> `)

        }


    })

});
