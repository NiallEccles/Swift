import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  public outgoingActive = new BehaviorSubject(true);
  public incomingActive = new BehaviorSubject(true);

  public connectionStatus = new BehaviorSubject('disconnected');

  constructor() {}
}
