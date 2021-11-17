import {Component, OnInit} from '@angular/core';
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
  registerForm: FormGroup;
  email = new FormControl('', Validators.compose([Validators.required,
    Validators.pattern('^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-\\.]+)\\.([a-zA-Z]{2,5})$')]));
  username = new FormControl('', Validators.required);
  password = new FormControl('', Validators.required);
  confirmedPassword = new FormControl('', Validators.required);
  userRegistrationRequest = {} as UserRegistrationRequest

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
    this.authService.register(this.userRegistrationRequest).subscribe(response => {
      console.log(response);
    });
  }

  validatePassword() {
    console.log("adasd")
    if (this.getConfirmedPassword() !== this.getPassword()) {
      this.registerForm.get('confirmedPassword').setErrors({ invalid: true })
    } else {
      this.registerForm.get('confirmedPassword').setErrors(null)
    }
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
