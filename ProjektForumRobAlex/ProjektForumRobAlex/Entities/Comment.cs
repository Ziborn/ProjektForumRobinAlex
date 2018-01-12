using ForumProjekt.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ProjektForumRobAlex.Entities
{
    public class Comment
    {
        public int CommentId { get; set; }

        public string CommentText { get; set; }

        public int PostForeignKey { get; set; }

        [ForeignKey("PostForeignKey")]
        public Post Post { get; set; }
    }
}
