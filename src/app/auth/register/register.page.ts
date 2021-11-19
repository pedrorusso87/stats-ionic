import {Component, OnInit, ViewChild} from '@angular/core';
import {AuthService} from '../services/auth.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {Router} from '@angular/router';
import {LoadingController} from '@ionic/angular';
import {UserRegistrationRequest} from '../models/user.register';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  @ViewChild('passwordEyeRegister') passwordEye;
  registerForm: FormGroup;
  email = new FormControl('', Validators.compose([Validators.required,
    Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]));
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  confirmedPassword = new FormControl('', Validators.required);
  userRegistrationRequest = {} as UserRegistrationRequest
  passwordTypeInput  =  'password';
  passwordIcon  =  'eye-off';

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private store: Store,
    private loadingController: LoadingController,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      email: this.email,
      username: this.username,
      password: this.password,
      confirmedPassword: this.confirmedPassword
    });
  }

  ngOnInit() {
  }

  onSubmit(): void {
    this.userRegistrationRequest = {
      username: this.getUsername(),
      email: this.getEmail(),
      password: this.getPassword()
    }
    this.authService.register(this.userRegistrationRequest).subscribe(async response => {
      // check if the new username comes in the response. This means that the register process was successful
      await this.presentLoading();
      if(response && response.username) {
        await this.router.navigate(['/home'])
        await this.loadingController.dismiss();
      }
    });
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Please wait...',
    });
    await loading.present();
  }

  validatePassword() {
    if (this.getConfirmedPassword() !== this.getPassword()) {
      this.registerForm.get('confirmedPassword').setErrors({ invalid: true })
    } else {
      this.registerForm.get('confirmedPassword').setErrors(null)
    }
  }


  togglePasswordMode() {
    this.passwordTypeInput  =  this.passwordTypeInput  ===  'text'  ?  'password'  :  'text';
    this.passwordIcon  =  this.passwordIcon  ===  'eye-off'  ?  'eye'  :  'eye-off';
    this.passwordEye.el.setFocus();
  }

  getEmail(): any {
    return this.registerForm.get('email')?.value;
  }

  getPassword(): any {
    return this.registerForm.get('password')?.value;
  }

  getUsername(): any {
    return this.registerForm.get('username')?.value;
  }

  getConfirmedPassword(): any {
    return this.registerForm.get('confirmedPassword')?.value;
  }

}
