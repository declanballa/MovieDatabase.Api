import { Injectable, OnChanges } from "@angular/core";

@Injectable()
export class MovieModalService {
    modalOpen = false;

    openModal() {
        this.modalOpen = true;
    }
}