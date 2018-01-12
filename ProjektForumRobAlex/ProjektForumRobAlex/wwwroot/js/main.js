$(document).ready(function () {
    ShowPosts();
    HideSinglePosts();
    HideAddForm();
});

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
            console.log(`Success! Result = ${result}`);
            ShowPosts();
        })
        .fail(function (error) {
            console.log(error);
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

$(document).on("click", "#removeComment", function () {
    var id = $(this).parent().siblings(".commentId").text();
    console.log(id);
    $.ajax({
        url: '/api/posts/removeComment',
        method: 'DELETE',
        data: {
            commentId: id
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
            var html = GetPost(result);
            $("#findPost").html(html);
            console.log("Success!", result);
        })
        .fail(function (xhr, status, error) {
            alert("Failed to show post" + status + JSON.stringify(xhr));
            console.log("Fail 1", xhr);
            $("#findPost").text(xhr.responseText);
        });
});

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

$(document).on("click", "#showEdit", function () {
    var id = $(this).parent().parent().siblings().children('.postId').text();
    console.log(id);
    HidePosts();
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
            alert("Failed at getting edit");
            console.log("Fail 1", xhr);
            $("#findPost").text(xhr.responseText);
        });
});

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
        })
        .fail(function (xhr, status, error) {
            alert("Failed at getting");
            console.log("Fail 2", xhr);
            $("#allPosts").text(xhr.responseText);
        });
}

$("#addComment button").click(function () {
    var id = $(this).parent().parent().siblings().children().children().children('.postId').text();
    console.log(id);
    $.ajax({
        url: '/api/posts/AddComment',
        method: 'POST',
        data: {
            "PostForeignKey" : id,
            "CommentText": $("#addComment [name=CommentText]").val()
        }
    })
        .done(function (result) {
            console.log(`Success! Result = ${result}`);
        })
        .fail(function (error) {
            console.log(error);

        });
});

$(document).on("click", ".showComments", function () {
    var id = $(this).parent().siblings(".postId").text();
    HidePosts();
    console.log(id);
    $.ajax({
        url: 'api/posts/showComment',
        method: 'GET',
        data: { id: id }
    })
        .done(function (result) {
            console.log(result);
            var html = "";
            result.forEach(function (comment) {
                html += GetComments(comment);
            });
            $("#findComments").html(html);
        })
        .fail(function (xhr, status, error) {
            alert("Failed to show post" + status + JSON.stringify(xhr));
            console.log("Fail 1", xhr, result);
            $("#findComments").text(xhr.responseText);
        });
});

function GetPosts(post) {
    var html = '<tr>';
    html += '<td class="postId" hidden>' + post.id + '</td>';
    html += '<td class="title"> <a class="showSinglePost showComments" id="showPost" href="#"> <b>' + post.title + '</b> </a> </td>';
    html += '<td><button id="removePost">Remove</button></td>';
    html += '</tr>';
    return html;
}

function GetPost(post) {
    var html = '<tr>';
    html += '<td class="postId" hidden>' + post.id + '</td>';
    html += '<td class="title" ><b>' + post.title + '</b></td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td class="Post">' + post.postText + '</td>';
    html += '</tr>';
    html += '<tr>';
    html += '<td> <button id="showEdit">Edit</button> <button class="showPosts">Go back</button> </td>';
    html += '</tr>';
    return html;
}

function GetEdit(post) {
    var html = '<tr>';
    html += '<td class="postId" hidden>' + post.id + '</td>';
    html += '<td class="Title" contenteditable="true">' + post.title + '</td>';
    html += '<td class="Post" contenteditable="true">' + post.postText + '</td>';
    html += '<td><button id="editPost">Save Changes</button></td>';
    html += '<td> <button class="showPosts">Go back</button></td>';
    html += '</tr>';
    return html;
}

function GetComments(comment) {
    var html = '<tr>';
    html += '<td class="commentId" hidden>' + comment.commentId + '</td>';
    html += '<td class="commentText">' + comment.commentText + '</td>';
    html += '<td><button id="removeComment">Remove</button></td>';
    html += '</tr>';
    return html;
}

function HidePosts() {
    $("#allPostsToggle").hide();
}

$(document).on("click", ".showPosts", function () {
    $("#allPostsToggle").show();
    HideSinglePosts();
});

function HideSinglePosts() {
    $("#singlePostToggle").hide();
}

$(document).on("click", ".showSinglePost", function () {
    $("#singlePostToggle").show();
});

function HideAddForm() {
    $("#addFormToogle").hide();
}

$(document).on("click", ".showAddForm", function () {
    $("#addFormToogle").show();
    $("#singlePostToggle").hide();
    $("#allPostsToggle").hide();
});

$(document).on("click", ".homeHideShow", function () {
    $("#addFormToogle").hide();
    $("#singlePostToggle").hide();
    $("#allPostsToggle").show();
});