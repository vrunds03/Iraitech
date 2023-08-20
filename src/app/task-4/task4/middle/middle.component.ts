import { Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent {
  inputText: string = '';

  constructor(private communicationServe: CommunicationService) { }

  onInputTextChange() {
    this.communicationServe.broadcastText(this.inputText);
  }
}
