import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  user: User = new User();
  emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  constructor() {}

  ngOnInit(): void {}

  onSubmit(addUserForm: NgForm) {
    console.log('onSubmit:', addUserForm);
    //console.log('onSubmit:', addUserForm.controls['firstname'].errors);
  }
}
