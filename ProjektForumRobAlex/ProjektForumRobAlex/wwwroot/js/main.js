$("#addForm button").click(function () {

    $.ajax({
        url: '/api/posts/',
        method: 'POST',
        data: {
            "Title": $("#addForm [name=Title]").val(),
            "PostText": $("#addForm [name=PostText]").val()
        }

    })
        .done(function (result) {

            alert(`Success! Result = ${result}`);

        })

        .fail(function (xhr, status, error) {

            alert(`Fail!`);
            console.log("Error", xhr, status, error);

        });
});

$(document).ready(function () {
    $.ajax({
        url: 'api/posts/',
        method: 'GET'
    })
        .done(function (result) {
            var html = "";
            console.log("Success!", result);
            //clear();
            result.forEach(function (item) {
                html += GetPosts(item);
            });
            $("#allPosts").html(html);

        })
        .fail(function (xhr, status, error) {

            alert(error);
            console.log("Fail", xhr);
            //clear();
            $("#allPosts").text(xhr.responseText);
        });
});