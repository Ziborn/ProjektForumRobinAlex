﻿// <auto-generated />
using ForumProjekt.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage;
using Microsoft.EntityFrameworkCore.Storage.Internal;
using System;

namespace ProjektForumRobAlex.Migrations
{
    [DbContext(typeof(DatabaseContext))]
    [Migration("20180105094455_Comments")]
    partial class Comments
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.0.1-rtm-125")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("ForumProjekt.Entities.Post", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("PostText");

                    b.Property<string>("Title");

                    b.HasKey("Id");

                    b.ToTable("Posts");
                });

            modelBuilder.Entity("ProjektForumRobAlex.Entities.Comment", b =>
                {
                    b.Property<int>("CommentId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CommentText");

                    b.Property<int>("PostForeignKey");

                    b.HasKey("CommentId");

                    b.HasIndex("PostForeignKey");

                    b.ToTable("Comments");
                });

            modelBuilder.Entity("ProjektForumRobAlex.Entities.Comment", b =>
                {
                    b.HasOne("ForumProjekt.Entities.Post", "Post")
                        .WithMany("Comments")
                        .HasForeignKey("PostForeignKey")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
