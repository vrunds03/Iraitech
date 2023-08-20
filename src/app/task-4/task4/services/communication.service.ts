import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  private textSubject = new Subject<string>();
  textObservable$: Observable<string> = this.textSubject.asObservable();

  broadcastText(text: string) {
    this.textSubject.next(text);
  }
}
