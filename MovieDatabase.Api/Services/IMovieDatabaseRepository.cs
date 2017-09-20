using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MovieDatabase.Api.Data;

namespace MovieDatabase.Api.Services
{
    public interface IMovieDatabaseRepository
    {
        IEnumerable<Movie> GetMovies();
        bool MovieExists(int id);
        void AddMovie(Movie movie);
        Movie GetMovie(int id);

        void RemoveMovie(Movie movie);
        bool Save();
    }
}
