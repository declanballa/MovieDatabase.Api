import { Component, OnInit } from '@angular/core';
import { Movie, MovieModalService } from '../models';

@Component({
  selector: 'movie-modal',
  templateUrl: './movie-modal.component.html'
})
export class MovieModalComponent {

  constructor(private movieModalService: MovieModalService) { }

  modalOpen = this.movieModalService.modalOpen;
}