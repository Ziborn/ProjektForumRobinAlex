using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ForumProjekt.Entities;

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

            return Ok();
        }

        [HttpGet]
        public IActionResult GetPosts()
        {
            return Ok(databaseContext.Posts);
        }

        [HttpGet, Route("test")]
        public IActionResult GetPost(int id)
        {
            var x = databaseContext.Posts.SingleOrDefault(p => p.Id == id);
            return Ok(x);
        }

        [HttpDelete]
        public IActionResult DeleteCustomer(Post post)
        {
            databaseContext.Remove(post);
            databaseContext.SaveChanges();
            return Ok(post.Id);
        }

    }
}