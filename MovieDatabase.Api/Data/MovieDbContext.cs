using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieDatabase.Api.Models;

namespace MovieDatabase.Api.Data
{
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options)
           : base(options)
        {
            Database.Migrate();
        }
        public DbSet<Movie> Movies { get; set; }
    }
}