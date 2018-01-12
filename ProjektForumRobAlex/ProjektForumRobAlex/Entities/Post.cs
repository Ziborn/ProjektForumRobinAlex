using ProjektForumRobAlex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumProjekt.Entities
{
    public class Post

    {
        public int Id { get; set; }
        public string PostText { get; set; }
        public string Title { get; set; }
        public List<Comment> Comments { get; set; }
    }
}
