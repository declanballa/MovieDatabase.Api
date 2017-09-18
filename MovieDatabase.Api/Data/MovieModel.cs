using System;

namespace MovieDatabase.Api.Models {
    public class Movie {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Director { get; set; }
        public DateTime ReleaseDate { get; set; }
        public int Rating { get; set; }
    }
}