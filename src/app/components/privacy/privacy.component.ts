import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  modalOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleModal() {
    this.modalOpen = !this.modalOpen;
  }

}
