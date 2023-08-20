import { Component, OnDestroy } from '@angular/core';
import { CommunicationService } from '../services/communication.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-topright',
  templateUrl: './topright.component.html',
  styleUrls: ['./topright.component.css']
})
export class ToprightComponent implements OnDestroy {
  text: string = '';
  private subscription: Subscription;

  constructor(private communicationServe: CommunicationService) {
    this.subscription = this.communicationServe.textObservable$.subscribe(
      text => {
        this.text = text;
      }
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
