import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import './core/rxjs-extensions';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieModalComponent } from './movie-modal/movie-modal.component';
import { MovieService, MovieModalService } from './models';

/* Feature Modules */
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    CoreModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MovieListComponent,
    MovieModalComponent
  ],
  providers: [MovieService, MovieModalService],
  bootstrap: [AppComponent]
})

export class AppModule { }