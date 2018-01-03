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
    }
}