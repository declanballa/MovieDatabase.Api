using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using MovieDatabase.Api.Data;
using MovieDatabase.Api.Services;

namespace MovieDatabase.Api.Services
{
    public class MovieDatabaseRepository : IMovieDatabaseRepository
    {
        private MovieDbContext _context;
        public MovieDatabaseRepository(MovieDbContext context)
        {
            _context = context;
        }

        public IEnumerable<Movie> GetMovies()
        {
            return _context.Movies.OrderBy(c => c.Title).ToList();
        }
    }
}