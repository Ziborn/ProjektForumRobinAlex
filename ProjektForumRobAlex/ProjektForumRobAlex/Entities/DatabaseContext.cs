using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumProjekt.Entities
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }


        public DatabaseContext(DbContextOptions<DatabaseContext> context) : base(context)
        {

        }
    }
}
