import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/auth.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import * as fromLogin from '../login/store';
import { Store } from "@ngrx/store";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private store: Store,
  ) {
    this.loginForm = this.fb.group({
      username: this.username,
      password: this.password
    });
  }

  ngOnInit() {
  }

  login() {
    const loginRequest = {
      email: this.getEmail(),
      password: this.getPassword()
    }
    this.store.dispatch(new fromLogin.LoginUser(loginRequest));

  }

  getEmail(): any {
    return this.loginForm.get('username')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }
}
