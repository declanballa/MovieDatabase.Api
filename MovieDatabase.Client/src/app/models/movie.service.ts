import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Movie } from './movie.model';
import { Config } from '../core';

let headers = new Headers({ 'Content-Type': 'application/json'})
let options = new RequestOptions({ headers: headers });
let moviesUrl = Config.baseUrls.movies;

@Injectable()
export class MovieService {
    constructor(private http: Http) { }

    // GET api/movies
    getMovies() {
        return <Observable<Movie[]>>this.http
            .get(moviesUrl)
            .map(res => this.extractData<Movie[]>(res));
    }

    // PUT api/movies/{id}
    updateMovie(movie: Movie) {
        let body = JSON.stringify(movie);

        return <Observable<Movie>>this.http
            .put(`${moviesUrl}/${movie.id}`, body, options)
            .map(res => this.extractData<Movie>(res));
    }

    // POST api/movies

    // DELETE api/movies/{id}

    // Function to parse incoming data:
    private extractData<T>(res: Response) {
        if (res.status < 200 || res.status >= 300)
          throw new Error('Bad response status: ' + res.status);
        
        let body = res.json ? res.json() : null;
        
        return <T>(body || {});
      }
}