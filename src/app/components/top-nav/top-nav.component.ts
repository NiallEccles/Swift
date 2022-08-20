import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { incomingData } from 'src/app/interfaces';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { BumpService } from 'src/app/services/bump/bump.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss'],
})
export class TopNavComponent implements OnInit {
  public active: boolean = true;
  public hasBeenBumped: boolean = false;
  public username: string = "Anonymous";

  constructor(public activity: ActivityService, private bump: BumpService, private messageService: MessageService) {
    activity.incomingActive.subscribe((activity) => {
      this.active = activity;
    });
    bump.incomingBump.subscribe((bump) => {
      this.hasBeenBumped = true;
      navigator.vibrate([200,100, 100, 100]);
      timer(500).subscribe(() => {
        this.hasBeenBumped = false;
      });
    });
    this.messageService.incomingMessage.subscribe((data: incomingData)=>{
      this.username = data.message ? data.message.name : 'Anonymous';
    })
  }

  ngOnInit(): void {}
}
