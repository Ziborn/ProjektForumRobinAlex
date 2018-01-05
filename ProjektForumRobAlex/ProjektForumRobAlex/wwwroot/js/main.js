$(document).ready(function () {
    ShowPosts();
});
<<<<<<< Updated upstream

$("#addForm button").click(function () {

=======
$("#addForm button").click(function () {
>>>>>>> Stashed changes
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
            ShowPosts();
        })
        .fail(function (xhr, status, error) {
            alert(`Fail at posting!`);
            console.log("Error", xhr, status, error);
<<<<<<< Updated upstream
        });
});

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
            console.log("Success in deleting!", result);
            ShowPosts();
        })
        .fail(function (xhr, status, error) {
            console.log("Error in deleting!", xhr, status, error);
        });
});

$(document).on("click", "#showPost", function () {
    var id = $(this).parent().siblings(".postId").text();
    HidePosts();
    console.log(id);
    $.ajax({
        url: 'api/posts/showSinglepost',
        method: 'GET',
        data: { id: id }
    })
        .done(function (result) {
=======
        });
});
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
            console.log("Success in deleting!", result);
            ShowPosts();
        })
        .fail(function (xhr, status, error) {
            console.log("Error in deleting!", xhr, status, error);
        });
});
$(document).on("click", "#showPost", function () {
    var id = $(this).parent().siblings(".postId").text();
    HidePosts();
    console.log(id);
    $.ajax({
        url: 'api/posts/showSinglepost',
        method: 'GET',
        data: { id: id }
    })
        .done(function (result) {
>>>>>>> Stashed changes
            var html = GetPost(result);
            $("#findPost").html(html);
            console.log("Success!", result);
        })
        .fail(function (xhr, status, error) {
            alert(error);
            console.log("Fail 1", xhr);
            $("#findPost").text(xhr.responseText);
        });
});
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
$(document).on("click", "#editPost", function () {
    var id = $(this).parent().siblings(".postId").text();
    var row = $(this).parent().parent();
    $.ajax({
        url: '/api/posts/',
        method: 'PUT',
        data: {
            id: id,
            "Title": $(".Title", row).text(),
            "PostText": $(".Post", row).text()
        }
    })
        .done(function (result) {
            console.log("Success!", result);
            ShowPosts();
        })
        .fail(function (xhr, status, error) {
            console.log("Error", xhr, status, error);
        });
});
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
$(document).on("click", "#showEdit", function () {
    var id = $(this).parent().siblings(".postId").text();
    HidePosts();
    console.log(id);
    $.ajax({
        url: 'api/posts/showSinglepost',
        method: 'GET',
        data: { id: id }
    })
        .done(function (result) {
            var html = GetEdit(result);
            $("#findPost").html(html);
            console.log("Success!", result);
        })
        .fail(function (xhr, status, error) {
            alert(error);
            console.log("Fail 1", xhr);
            $("#findPost").text(xhr.responseText);
        });
});
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
function ShowPosts() {
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
<<<<<<< Updated upstream

        })
        .fail(function (xhr, status, error) {

=======
        })
        .fail(function (xhr, status, error) {
>>>>>>> Stashed changes
            alert(error);
            console.log("Fail 2", xhr);
            $("#allPosts").text(xhr.responseText);
        });
}
<<<<<<< Updated upstream

function GetPosts(post) {

=======
function GetPosts(post) {
>>>>>>> Stashed changes
    var html = '<tr>';
    html += '<th class="postId" hidden>' + post.id + '</th>';
    html += '<td class="title">' + post.title + '</td>';
    html += '<th><button id="showPost">Show</button></th>';
    html += '<th><button id="removePost">Remove</button></th>';
    html += '</tr>';
<<<<<<< Updated upstream

    console.log(html);
    return html;
}

=======
    console.log(html);
    return html;
}
>>>>>>> Stashed changes
function GetPost(post) {
    var html = '<tr>';
    html += '<th class="postId" hidden>' + post.id + '</th>';
    html += '<td class="title">' + post.title + '</td>';
    html += '<td class="Post">' + post.postText + '</td>';
    html += '<th><button id="showEdit">Edit</button></th>';
    html += '<td> <button id="show">Go back</button></td>';
<<<<<<< Updated upstream
    html += '</tr>';

    console.log(html);
    return html;
}

function GetEdit(post) {

    var html = '<tr>';
    html += '<th class="postId" hidden>' + post.id + '</th>';
    html += '<td class="Title" contenteditable="true">' + post.title + '</td>';
    html += '<td class="Post" contenteditable="true">' + post.postText + '</td>';
    html += '<th><button id="editPost">Save Changes</button></th>';
    html += '<td> <button id="show">Go back</button></td>';
=======
>>>>>>> Stashed changes
    html += '</tr>';
    console.log(html);
    return html;
}
<<<<<<< Updated upstream

function HidePosts() {
    $("#hidePosts").hide();
}

=======
function GetEdit(post) {
    var html = '<tr>';
    html += '<th class="postId" hidden>' + post.id + '</th>';
    html += '<td class="Title" contenteditable="true">' + post.title + '</td>';
    html += '<td class="Post" contenteditable="true">' + post.postText + '</td>';
    html += '<th><button id="editPost">Save Changes</button></th>';
    html += '<td> <button id="show">Go back</button></td>';
    html += '</tr>';
    console.log(html);
    return html;
}
function HidePosts() {
    $("#hidePosts").hide();
}
>>>>>>> Stashed changes
$(document).on("click", "#show", function () {
    $("#hidePosts").show();
});