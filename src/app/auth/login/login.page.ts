import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import * as fromLogin from '../login/store';
import { Store } from '@ngrx/store';
import {AlertController, LoadingController} from '@ionic/angular';
import {Router} from "@angular/router";
import {LoginResponseError} from '../models/user.login';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
  @ViewChild('passwordEyeRegister') passwordEye;
  loginUserPending$ = this.store.select(fromLogin.getLoggedUserPending);
  loginError$ = this.store.select(fromLogin.getLoggedUserError);
  loginError = false;
  errorMessage: string;

  loginForm: FormGroup;
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  passwordTypeInput  =  'password';
  passwordIcon  =  'eye-off';

  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private store: Store,
    private loadingController: LoadingController,
    private alertController: AlertController,
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
      message: 'Cargando...',
      id:'loading-controller'
    });
    await loading.present();
    this.listenForLogin();
  }

  listenForLogin(): void {
    this.loginUserPending$.pipe().subscribe(pending => {
      if(!pending) {
        this.listenForError();
      }
    })
  }

  listenForError() {
    this.loginError$.subscribe(error => {
      if(!error) {
        this.loginError = false;
        this.loadingController.dismiss();
        this.router.navigate(['/home']);
      } else {
        this.setErrorMessage(error);
        this.loginError = true;
        this.loadingController.dismiss();
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

  private setErrorMessage(error: LoginResponseError): void {
    if (error.status === 400) {
      this.errorMessage = 'Usuario o contraseña inválidos';
    } else {
      this.errorMessage = 'Hubo un error al procesar la solicitud';
    }
  }

  ngOnDestroy() {
    this.loginError$
  }
}
