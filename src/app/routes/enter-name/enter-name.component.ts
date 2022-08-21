import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-name',
  templateUrl: './enter-name.component.html',
  styleUrls: ['./enter-name.component.scss']
})
export class EnterNameComponent implements OnInit {
  form: FormGroup;

  constructor(private router: Router) {
    this.form = new FormGroup({
      name: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  submit(){
    if(!this.form.get('name')!.invalid){
      localStorage.setItem('name', this.form.value.name);
      this.router.navigate(['/chat']);
    }
  }

}
