$(document).ready(function () {
    var idIncre = 1;
    $(".update").hide()

    $("#add").click(function () {
        var inputVal = $('#inputValue').val();
        if (inputVal != "") {
            if ($("#menu-list ul").length == 0) {
                $("#menu-list").append(`<ul></ul>`)
            }
            if ($("#all-dropdown").find('select').length > 1) {
                var targetSel = $("#all-dropdown").find('select').last();
                if (targetSel.val() == 'none') {
                    var targetEle = $(`#menu-list`).find(`li[data-id=${targetSel.prev().val()}]`);
                    targetEle.find('>ul').append(`<li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}<p> <button type="button" class="edit">edit</button><button type="button" class="delete">delete</button></li>`);
                    $("#all-dropdown").find('select').last().append(`<option value='${idIncre}'>${inputVal}</option>`);
                }
                else {
                    var targetEle = $(`#menu-list`).find(`li[data-id=${targetSel.val()}]`);
                    $("#all-dropdown").append(`<select><option value='none'>Select Child</option><option value='${idIncre}'>${inputVal}</option></select>`);
                    targetEle.append(`<ul><li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p> <button type="button" class="edit">edit</button><button type="button" class="delete">delete</button></li></ul>`);
                }
            }
            else {
                if ($('.parent-dropdown').val() == 'none') {
                    $('#menu-list>ul').append(`<li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p> <button type="button" class="edit">edit</button><button type="button" class="delete">delete</button></li>`);
                    $('.parent-dropdown').append(`<option value='${idIncre}'>${inputVal}</option>`);
                } else {
                    var targetEle = $(`#menu-list`).find(`li[data-id=${$('.parent-dropdown').val()}]`);
                    if (targetEle.find('ul').length > 0) {
                        targetEle.find('>ul').append(`<li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p> <button type="button" class="edit">edit</button><button type="button" class="delete">delete</button></li>`);
                        $("#all-dropdown").find('select').last().append(`<option value='${idIncre}'>${inputVal}</option>`);
                    } else {
                        $("#all-dropdown").append(`<select><option value='none'>Select Child</option><option value='${idIncre}'>${inputVal}</option></select>`);
                        targetEle.append(`<ul><li data-id='${idIncre}' data-text='${inputVal}'><p>${inputVal}</p> <button type="button" class="edit">edit</button><button type="button" class="delete">delete</button></li></ul>`);
                    }
                }
            }
        }
        // console.log($('.parent-dropdown').val())
        $('#inputValue').val("");
        idIncre++;
    });
    $(document).on('change', 'select', function () {
        $(this).nextAll().remove();
        if ($(this).val() != 'none') {
            var targetEle = $(`#menu-list`).find(`li[data-id=${$(this).val()}]`);
            if (targetEle.find('ul').length > 0) {
                $("#all-dropdown").append(`<select><option value='none'>Select Child</option></select>`);
                for (i = 0; i < targetEle.find('ul:first').children().length; i++) {
                    var dataId = targetEle.find('ul:first').children().eq(i).attr('data-id')
                    var dataText = targetEle.find('ul:first').children().eq(i).attr('data-text')
                    $("#all-dropdown").find('select').last().append(`<option value='${dataId}'>${dataText}</option>`);
                }
            }
        }
    });
    $(document).on('click', '.edit', function () {
        var value = $(this).closest('li').attr("data-text")
        id = $(this).closest('li').attr("data-id")
        console.log( $(this));
        console.log((value));
        $("#inputValue").val(value)
        $(".update").show()
        $("#add").hide()
    })

    $(document).on('click', '.update', function () {
        updateval = $("#inputValue").val();
        $("#menu-list").find(`[data-id=${id}]`).attr("data-text", updateval).find(">p").text(updateval)
        $("#all-dropdown select").find(`option[value=${id}]`).text(updateval)
        $(".update").hide()
        $("#add").show()
    })


    $(document).on('click', '.delete', function () {
        del = $(this).closest("li").attr("data-id")
        $("#all-dropdown select").find(`option[value=${del}]`).remove()
        if ($(this).closest('ul').children().length == 1) {
            $(this).closest('ul').remove();
        }
        else {
            $(this).closest('li').remove();
        }
        $(".update").hide()
        $("#add").show()
        $("select").trigger("change")
    })

});