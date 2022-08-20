import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { incomingData } from 'src/app/interfaces';
import { ActivityService } from 'src/app/services/activity/activity.service';
import { BumpService } from 'src/app/services/bump/bump.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.scss'],
})
export class ChatBoxComponent implements OnInit {
  form: FormGroup;
  public incomingMessage: { message: string; name: string } = {
    message: '',
    name: '',
  };
  public isActive: boolean = true;

  constructor(
    private messageService: MessageService,
    private activity: ActivityService,
    private bumpService: BumpService
  ) {
    this.form = new FormGroup({
      message: new FormControl(''),
    });

    this.form.controls['message'].valueChanges.subscribe((message) => {
      this.messageService.outgoingMessage.next({message: message, name: localStorage.getItem('name')!});
    });

    this.messageService.incomingMessage.subscribe(
      (incomingData: incomingData) => {
        this.incomingMessage = incomingData.message;
      }
    );

    this.activity.incomingActive.subscribe((activity) => {
      this.isActive = activity;
    });

    this.bumpService.incomingBump.subscribe((bump) => {
      console.log('BUMP');
    });
  }

  ngOnInit(): void {}

  public bump() {
    this.bumpService.outgoingBump.next(1);
  }
}
