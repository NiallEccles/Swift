import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  public slideContent = [
    {
      title: 'Enter your name',
      description: 'Let us know what to call you!'
    },
    {
      title: 'Get connected',
      description: 'You are randomly connected with another user who is currently online.'
    },
    {
      title: 'Instant messaging',
      description: 'Every character you enter is sent immediately to the person you are connected to. No need to hit send!'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
