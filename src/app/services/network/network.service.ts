import { Injectable } from '@angular/core';
import { BehaviorSubject, fromEvent, map, merge, of, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  networkStatus = new BehaviorSubject(false);
  networkStatus$: Subscription = Subscription.EMPTY;


  constructor() {
    this.checkNetworkStatus();
  }

  checkNetworkStatus() {
    this.networkStatus$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    )
      .pipe(map(() => navigator.onLine))
      .subscribe(status => {
        console.log('status', status);
        this.networkStatus.next(status);
      });
  }
}
