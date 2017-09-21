import { Pipe, PipeTransform } from '@angular/core';

import { Movie } from '../models';

@Pipe({ name: 'sortMovies' })
export class SortMoviesPipe implements PipeTransform {
  transform(value: Movie[], args?: any[]) {
    if (!value || !value.sort) { return value; }

    return value.sort((a: Movie, b: Movie) => {
      if (a.releaseDate < b.releaseDate) { return -1; }
      if (a.releaseDate > b.releaseDate) { return 1; }
      return 0;
    });
  }
}