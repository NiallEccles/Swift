import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BumpService {

  public outgoingBump = new Subject<number>()
  public incomingBump = new Subject<number>();

  constructor() { }
}
