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
            return _context.Movies.OrderBy(m => m.Id).ToList();
        }

        public bool MovieExists(int id) {
            return _context.Movies.Any(m => m.Id == id);
        }

        public void AddMovie(Movie movie)
        {
            _context.Add(movie);
        }

        public Movie GetMovie(int id) {
            return _context.Movies.Where(m => m.Id == id).FirstOrDefault();
        }

        public void RemoveMovie(Movie movie) {
            _context.Movies.Remove(movie);
        }

        public bool Save()
        {
            return (_context.SaveChanges() >= 0);
        }
    }
}