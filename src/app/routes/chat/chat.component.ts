import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { ColyseusService } from 'src/app/services/colyseus/colyseus.service';
import { NetworkService } from 'src/app/services/network/network.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
})
export class ChatComponent implements OnInit {
  public connectionStatus = 'disconnected';
  public isOnline: boolean = true;

  constructor(
    private activityService: ActivityService,
    private colyseus: ColyseusService,
    private networkService: NetworkService
  ) {
    this.activityService.connectionStatus.subscribe((status) => {
      this.connectionStatus = status;
    });
    this.networkService.networkStatus.subscribe((status) => {
      this.isOnline = status;
    });
  }

  ngOnInit(): void {}
}
