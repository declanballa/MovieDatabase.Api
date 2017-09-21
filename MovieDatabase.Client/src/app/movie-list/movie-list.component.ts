import { Component, OnInit } from '@angular/core';
import { Movie, MovieService, MovieModalService } from '../models';
import { ToastService } from '../core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html'
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(
      private movieService: MovieService,
      private movieModalService: MovieModalService,
      private toastService: ToastService) { }

  getMovies() {
    this.movies = [];

    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;

        for (let movie in this.movies) {
          var m = this.movies[movie];

          m.hovering = m.rating;
        }
      })
  }

  updateMovieRating(movie: Movie, newRating: number) {
    movie.rating = newRating;
    
    this.movieService.updateMovie(movie)
      .subscribe(() => this.toastService.activate(`Successfully saved the rating for ${movie.title} to ${movie.rating}!`));
  }

  viewMovieDetails(movie: Movie) {
    this.movieModalService.openModal();
  }

  ngOnInit() {
    this.getMovies();
  }

  trackByMovies(index: number, movie: Movie) {
    return movie.id;
  }
}