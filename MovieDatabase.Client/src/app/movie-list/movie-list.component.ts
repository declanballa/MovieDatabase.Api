import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Movie, MovieService, MovieModalService } from '../models';
import { ToastService } from '../core';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  providers: [DatePipe]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  editingMovie: Movie = <Movie>{};
  modalOpen = false;
  validationErrorMessage = "You must provide all movie properties before saving!";
  validMovieModel = true;
  
  constructor(
      private movieService: MovieService,
      private movieModalService: MovieModalService,
      private toastService: ToastService,
      public datePipe: DatePipe) { }

  getMovies() {
    this.movies = [];

    this.movieService.getMovies()
      .subscribe(movies => {
        this.movies = movies;

        for (let movie in this.movies) {
          let m = this.movies[movie];
          const date = new Date(m.releaseDate);
          
          m.releaseDate = this.datePipe.transform(date, 'yyyy-MM-dd');
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
    this.modalOpen = true;
    this.editingMovie = this.clone(movie);
  }

  addNewMovie() {
    this.modalOpen = true;
    this.editingMovie = new Movie();
  }

  closeMovieDetails() {
    this.validMovieModel = true;
    this.modalOpen = false;
  }

  saveMovie(movie: Movie) {
    this.validMovieModel = true;

    if (this.validateMovie(movie)) {
      if (movie.id) {
        this.movieService.updateMovie(movie)
          .subscribe(() => {
            this.getMovies(),
            this.toastService.activate(`Successfully updated ${movie.title}!`),
            this.closeMovieDetails()
          });


        return;
      }
      
      this.movieService.addMovie(movie)
        .subscribe(() => {
          this.getMovies(),
          this.toastService.activate(`Successfully added ${movie.title}!`),
          this.closeMovieDetails()
        });
    } else {
      this.validMovieModel = false;
    }
  }

  removeMovie(movie: Movie) {
    this.movieService.removeMovie(movie)
      .subscribe(() => {
        this.getMovies(),
        this.toastService.activate(`Successfully removed ${movie.title}!`),
        this.closeMovieDetails()
      });
  }

  ngOnInit() {
    this.getMovies();
  }

  trackByMovies(index: number, movie: Movie) {
    return movie.id;
  }

  validateMovie(movie: Movie) {
    if ((!movie.title || movie.title === '') ||
        (!movie.director || movie.director === '') ||
        (!movie.releaseDate) ||
        (!movie.rating || (movie.rating < 0 || movie.rating > 5))) {
      return false;
    }
    
    return true;
  }

  clone<T>(source: T): T {
    return Object.assign({}, source);
  }
}