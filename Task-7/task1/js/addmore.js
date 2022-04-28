$(document).ready(function () {
    $("#addmore").click(function () {

        // count++
        $(".block1").append(`
        <div class="block clearfix">
            <div class="inside-btn fl">
                <input type="text" id="title" placeholder="Title">
                <button type="button" id="addchild">Add Child</button>
                <button type="button" id="submit">Submit</button>                        <button type="button" id="delete">Delete</button>
            </div>
        </div>
        `)
        // console.log(count);
    })

    $(".block1").on("click", "#addchild", function () {
        pos = $(this).parent().parent().index()
        $(".block").eq(pos).append(`
            <div class="child fl">
            <input type="text" id="subtitle" placeholder="Subtitle">
            <input type="text" id="value" placeholder="Value">
            <button type="button" id="delete1">Delete</button>
        </div>
        `)
    })
    $("body").on("click", "#delete", function () {
        $(this).parent().parent().remove()



    })
    $(".block1").on("click", "#delete1", function () {
        $(this).parent().remove()
    })

    $(".block1").on("click", "#submit", function () {
        var srno = $(this).parent().parent().index();
        var a = $(this).siblings().eq(0).val()//parentval
        var b = $(this).parent().siblings().length//childlength

        if ($(`#${srno}`).length == 0) {

            $(this).parents().find(".details").append(`
     
        <table id="${srno}">
        <thead>
        <tr><th colspan=2>${a}</th></tr>
        </thead>
        </table>`)

        }

        $(this).parents().find(`table#${srno}`).find("thead").remove()
        $(this).parents().find(`table#${srno}`).prepend(`
  
        <thead class="head1">
        <tr><th colspan=2>${a}</th></tr>
        </thead>
     
        `)
        $(this).parents().find(`table#${srno}`).find("tbody").remove()

        console.log(srno,a);
        console.log(b);
        for (i = 0; i < b; i++) {


            var subtitle = $(this).parent().siblings().eq(i).children().eq(0).val()
            var value = $(this).parent().siblings().eq(i).children().eq(1).val()
            // console.log(subtitle, value);
            $(this).parents().children().find(`.details table#${srno}`).append(`<tbody><tr>
            
                <td>${subtitle}</td>
                <td>${value}</td>
            
                </tr></tbody> `)

            // console.log(srno, a);
        }

    })
});
