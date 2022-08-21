import { Injectable } from '@angular/core';
import * as Colyseus from 'colyseus.js';
import { ActivityService } from '../activity/activity.service';
import { BumpService } from '../bump/bump.service';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class ColyseusService {

  private client = new Colyseus.Client('ws://localhost:2567');

  constructor(private messageService: MessageService, private activity: ActivityService, private bump: BumpService) {
    this.client
      .joinOrCreate('chat')
      .then((room) => {
        console.log(room.sessionId, 'joined', room.name);

        room.onMessage("messages",(message)=>{
          this.messageService.incomingMessage.next(message);
        });

        room.onMessage("activity", (message) => {
          this.activity.incomingActive.next(message.activity);
        });

        room.onMessage("bump", (message) => {
          this.bump.incomingBump.next(1);
        });

        room.onMessage("join", (message) => {
          console.log(message);
          if(message.length === 1) {
            return;
          } else {
            this.activity.connectionStatus.next('connected');
          }
        });

        room.onMessage("leave", () => {
          this.activity.connectionStatus.next('disconnected');
        });

        this.messageService.outgoingMessage.subscribe((message) => {
          room.send("messages", {message, name: localStorage.getItem('name')});
        });

        this.activity.outgoingActive.subscribe((activity) => {
          room.send('activity', activity);
        });

        this.bump.outgoingBump.subscribe((bump) => {
          room.send('bump', bump);
        });
      })
      .catch((e) => {
        console.log('JOIN ERROR', e);
      });
  }
}
