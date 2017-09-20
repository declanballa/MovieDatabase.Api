using System;
using System.ComponentModel.DataAnnotations;

namespace MovieDatabase.Api.Models {
    public class MovieDto {
        public int Id { get; set; }
        [Required(ErrorMessage = "You must provide a Title for the movie.")]
        public string Title { get; set; }
        [Required(ErrorMessage = "You must provide a Director for the movie.")]
        public string Director { get; set; }
        [Required(ErrorMessage = "You must provide a Release Date for the movie.")]
        public DateTime ReleaseDate { get; set; }
        [Required(ErrorMessage = "You must provide a Rating for the movie.")]
        public int Rating { get; set; }
    }
}