using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using MovieDatabase.Api.Models;
using MovieDatabase.Api.Services;
using MovieDatabase.Api.Data;

namespace MovieDatabase.Api.Controllers
{
    [Route("api/movies")]
    public class MoviesController : Controller
    {
        private IMovieDatabaseRepository _movieDatabaseRepository;
        private string errorMessage;

        public MoviesController(IMovieDatabaseRepository movieDatabaseRepository) {
            _movieDatabaseRepository = movieDatabaseRepository;
            errorMessage = "An error occurred while processing your request.";
        }

        [HttpGet()]
        public IActionResult GetMovies()
        {
            var movieData = _movieDatabaseRepository.GetMovies();
            var results = Mapper.Map<IEnumerable<MovieDto>>(movieData);

            return Ok(results);
        }

        [HttpGet("{id}", Name = "GetMovie")]
        public IActionResult GetMovie(int id) {
            if (!_movieDatabaseRepository.MovieExists(id))
                return NotFound();

            var movie = _movieDatabaseRepository.GetMovie(id);

            if (movie == null)
                return NotFound();

            var movieResult = Mapper.Map<MovieDto>(movie);
            return Ok(movieResult);
        }

        [HttpPost()]
        public IActionResult CreateMovie([FromBody] MovieDto movie) {
            if (movie == null)
                return BadRequest();

            var newMovie = Mapper.Map<Data.Movie>(movie);

            _movieDatabaseRepository.AddMovie(newMovie);

            if (_movieDatabaseRepository.Save()) {
                var createdMovie = Mapper.Map<Models.MovieDto>(newMovie);

                return CreatedAtRoute("GetMovie", new { id = createdMovie.Id }, createdMovie);
            } else {
                return StatusCode(500, errorMessage);
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateMovie(int id, [FromBody] MovieDto movie) {
            if (movie == null)
                return BadRequest();

            if (!_movieDatabaseRepository.MovieExists(id))
                return NotFound();

            var movieToUpdate = _movieDatabaseRepository.GetMovie(id);

            if (movieToUpdate == null)
                return NotFound();

            Mapper.Map(movie, movieToUpdate);

            if (!_movieDatabaseRepository.Save())
                return StatusCode(500, errorMessage);

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult RemoveMovie(int id) {
            if (!_movieDatabaseRepository.MovieExists(id))
                return NotFound();

            var movieToRemove = _movieDatabaseRepository.GetMovie(id);

            if (movieToRemove == null)
                return NotFound();

            _movieDatabaseRepository.RemoveMovie(movieToRemove);

            if (!_movieDatabaseRepository.Save())
                return StatusCode(500, errorMessage);

            return NoContent();
        }
    }
}
