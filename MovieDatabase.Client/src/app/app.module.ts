import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './core/rxjs-extensions';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieService, MovieModalService } from './models';
import { CoreModule } from './core/core.module';
import { SortMoviesPipe } from './movie-list/sort-movies.pipe';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MovieListComponent,
    SortMoviesPipe
  ],
  providers: [MovieService, MovieModalService],
  bootstrap: [AppComponent]
})

export class AppModule { }