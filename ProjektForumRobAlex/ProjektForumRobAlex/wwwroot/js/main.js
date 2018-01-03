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
            result.forEach(function (item) {
                html += GetPosts(item);
            });
            $("#allPosts").html(html);

        })
        .fail(function (xhr, status, error) {

            alert(error);
            console.log("Fail", xhr);
            $("#allPosts").text(xhr.responseText);
        });
});

function GetPosts(post) {

    var html = '<tr>';
    html += '<th class="postId" hidden>' + post.id + '</th>';
    html += '<td class="title">' + post.title + '</td>';
<<<<<<< HEAD
    html += '<th><button id="showPost">Show</button></th>';
    //html += '<td class="Post">' + post.postText + '</td>';
    html += '<th><button id="removePost">Remove</button></th>';
    html += '</tr>';

    console.log(html);
    return html;
}

$(document).on("click", "#removePost", function () {
    var id = $(this).parent().siblings(".postId").text();
    console.log(id);
    $.ajax({
        url: '/api/posts/',
        method: 'DELETE',
        data: {
            id: id
        }

    })
        .done(function (result) {
            console.log("Success in deleting!", result)
        })

        .fail(function (xhr, status, error) {
            console.log("Error in deleting!", xhr, status, error);
        })
});

$(document).on("click", "#showPost", function () {
    var id = $(this).parent().siblings(".postId").text();
    console.log(id);
    $.ajax({
        url: 'api/posts/test',
        method: 'GET',
        data: { id: id }
    })
        .done(function (result) {
            var html = GetPost(result);
            $("#findPost").html(html);
            console.log("Success!", result);
        })
        .fail(function (xhr, status, error) {

            alert(error);
            console.log("Fail", xhr);
            $("#findPost").text(xhr.responseText);
        });
});

function GetPost(post) {

    var html = '<tr>';
    html += '<th class="postId" hidden>' + post.id + '</th>';
    html += '<td class="title">' + post.title + '</td>';
    html += '<td class="Post">' + post.postText + '</td>';
    html += '<td> <p> kööööööörv </p></td>';
=======
    html += '<td class="Post">' + post.postText + '</td>';
<<<<<<< Updated upstream

=======
    
>>>>>>> Stashed changes
>>>>>>> master
    html += '</tr>';

    console.log(html);
    return html;
}