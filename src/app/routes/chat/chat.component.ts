import { Component, OnInit } from '@angular/core';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { ColyseusService } from 'src/app/services/colyseus/colyseus.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  public connectionStatus = 'disconnected';

  constructor(private activityService: ActivityService, private colyseus: ColyseusService) {
    this.activityService.connectionStatus.subscribe((status)=>{
      this.connectionStatus = status;
    })
  }

  ngOnInit(): void {
  }

}
