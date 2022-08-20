import { Component, HostListener } from '@angular/core';
import { ActivityService } from './services/activity/activity.service';
import { ColyseusService } from './services/colyseus/colyseus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'swift';

  constructor(private activity: ActivityService){}

  @HostListener('window:focus', ['$event'])
  onFocused(event: Event) {
    this.activity.outgoingActive.next(true);
  }
  @HostListener('window:blur', ['$event'])
  onBlur(event: Event) {
    this.activity.outgoingActive.next(false);
  }
}
