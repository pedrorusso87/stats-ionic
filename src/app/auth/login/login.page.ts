import {Component, OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as fromLogin from '../login/store';
import { Store } from '@ngrx/store';
import { LoadingController } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  @ViewChild('passwordEyeRegister') passwordEye;
  loginForm: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  loginUserPending$ = this.store.select(fromLogin.getLoggedUserPending);
  passwordTypeInput  =  'password';
  passwordIcon  =  'eye-off';

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private store: Store,
    private loadingController: LoadingController,
    private router: Router
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
      username: this.getEmail(),
      password: this.getPassword()
    };
    this.store.dispatch(new fromLogin.LoginUser(loginRequest));
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
    this.listenForLogin();
  }

  listenForLogin(): void {
    this.loginUserPending$.pipe().subscribe(pending => {
      if(!pending) {
        this.loadingController.dismiss();
        this.router.navigate(['/home']);
      }
    })
  }

  togglePasswordMode() {
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
    this.passwordIcon  =  this.passwordIcon  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.passwordEye.el.setFocus();
  }

  getEmail(): any {
    return this.loginForm.get('username')?.value;
  }

  getPassword(): any {
    return this.loginForm.get('password')?.value;
  }
}
