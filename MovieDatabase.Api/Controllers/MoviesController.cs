using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using MovieDatabase.Api.Models;
using MovieDatabase.Api.Services;

namespace MovieDatabase.Api.Controllers
{
    [Route("api/movies")]
    public class MoviesController : Controller
    {
        private IMovieDatabaseRepository _movieDatabaseRepository;

        public MoviesController(IMovieDatabaseRepository movieDatabaseRepository) {
            _movieDatabaseRepository = movieDatabaseRepository;
        }

        [HttpGet()]
        public IActionResult GetMovies()
        {
            var movieData = _movieDatabaseRepository.GetMovies();
            var results = Mapper.Map<IEnumerable<MovieDto>>(movieData);

            return Ok(results);
        }
    }
}
