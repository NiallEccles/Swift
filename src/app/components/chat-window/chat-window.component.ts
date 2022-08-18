import { Component, OnInit } from '@angular/core';
import { ColyseusService } from 'src/app/services/colyseus/colyseus.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss'],
})
export class ChatWindowComponent implements OnInit {
  constructor() {}

  ngOnInit(): void { }
}
