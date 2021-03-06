import { Component, OnDestroy, OnInit } from '@angular/core';
import { ToastService } from './toast.service';
import { Subscription } from 'rxjs/Subscription'

@Component({
  selector: 'app-toast',
   templateUrl: './toast.component.html'
})
export class ToastComponent implements OnDestroy, OnInit {
  private defaults = {
    title: '',
    message: 'Test Toast Message'
  };
  private toastElement: any;
  private toastSubscription: Subscription;

  title: string;
  message: string;

  constructor(private toastService: ToastService) {
    this.toastSubscription = this.toastService.toastState.subscribe((toastMessage) => {
      console.log(`Activating toast: ${toastMessage.message}`)

      this.activate(toastMessage.message);
    });
  }

  activate(message = this.defaults.message, title = this.defaults.title) {
    this.title = title;
    this.message = message;
    this.show();
  }

  ngOnInit() {
    this.toastElement = document.getElementById('toast');
  }

  ngOnDestroy() {
    this.toastSubscription.unsubscribe();
  }

  private show() {
    console.log(this.message);

    this.toastElement.style.opacity = 1;
    this.toastElement.style.zIndex = 9999;

    window.setTimeout(() => this.hide(), 5000);
  }

  private hide() {
    this.toastElement.style.opacity = 0;
    window.setTimeout(() => this.toastElement.style.zIndex = 0, 400);
  }
}