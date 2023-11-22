import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  registerSuccessMessage: string;
  isError: boolean;

  constructor() { 
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    });

    this.isError = false;
    this.registerSuccessMessage = "";
  }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    this.isError = false;
    this.registerSuccessMessage = "";
  }

  login() {
    this.isError = true;
  }

}
