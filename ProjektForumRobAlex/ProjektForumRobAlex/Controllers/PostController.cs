using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ForumProjekt.Entities;
using Microsoft.EntityFrameworkCore;
using ProjektForumRobAlex.Entities;

namespace ForumProjekt.Controllers
{

    [Route("api/posts")]
    public class PostController : Controller
    {

        private DatabaseContext databaseContext;

        public PostController(DatabaseContext databaseContext)
        {
            this.databaseContext = databaseContext;
            databaseContext.Database.EnsureCreated();
        }

        [HttpPost]
        public IActionResult Add(Post post)
        {
            databaseContext.Add(post);
            databaseContext.SaveChanges();

            return Ok(post.Title);
        }

        [HttpPost, Route("AddComment")]
        public IActionResult AddComment(Comment comment)
        {
            databaseContext.Add(comment);
            databaseContext.SaveChanges();

            return Ok(comment.CommentId);
        }

        [HttpGet]
        public IActionResult GetPosts()
        {
            return Ok(databaseContext.Posts);
        }

        [HttpGet, Route("showComment")]
        public IActionResult GetComment(int id)
        {
            var c = databaseContext.Comments.Where(p => p.PostForeignKey == id);
            return Ok(c);
        }

        [HttpGet, Route("showSinglepost")]
        public IActionResult GetPost(int id)
        {
            var x = databaseContext.Posts.SingleOrDefault(p => p.Id == id);
            
            return Ok(x);
        }

        [HttpDelete]
        public IActionResult DeletePost(Post post)
        {
            databaseContext.Remove(post);
            databaseContext.SaveChanges();
            return Ok(post.Id);
        }

        [HttpDelete, Route("removeComment")]
        public IActionResult DeleteComment(Comment comment)
        {
            databaseContext.Remove(comment);
            databaseContext.SaveChanges();
            return Ok(comment.CommentId);
        }

        [HttpPut]
        public IActionResult UpdatePost(Post post)
        {
            databaseContext.Update(post);
            databaseContext.SaveChanges();
            return Ok(post.Id);
        }

    }
}