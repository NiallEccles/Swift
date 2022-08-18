import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { incomingData } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public outgoingMessage = new Subject<string>();
  public incomingMessage = new Subject<incomingData>();

  constructor() { }
}
