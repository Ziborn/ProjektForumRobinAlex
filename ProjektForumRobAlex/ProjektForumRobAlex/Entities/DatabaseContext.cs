using Microsoft.EntityFrameworkCore;
using ProjektForumRobAlex.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ForumProjekt.Entities
{
    public class DatabaseContext : DbContext
    {
        public DbSet<Post> Posts { get; set; }
        public DbSet<Comment> Comments { get; set; }
        
        public DatabaseContext(DbContextOptions<DatabaseContext> context) : base(context)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Comment>()
                .HasOne(p => p.Post)
                .WithMany(b => b.Comments)
                .HasForeignKey(p => p.PostForeignKey);
        }

    }
}
