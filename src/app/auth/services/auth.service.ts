import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'
import { Observable } from 'rxjs';
import { UserLoginRequest } from '../models/user.login';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import * as loginUserActions from '../login/store/login-actions';
import {UserRegistrationRequest} from '../models/user.register';

const TOKEN_KEY = 'authenticationToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user: Observable<any>;
  private url = environment.API_URL;

  constructor(
    private storage: Storage,
    private httpClient: HttpClient,
    private platform: Platform,
    private router: Router
  ) {
    this.init();
  }

  async init() {
    await this.storage.create();
  }

  getAuthenticationToken() {
    return this.storage.get(TOKEN_KEY) || [];
  }

  async getUsername() {
    return await this.storage.get('username').then(username => {
      return username;
    })
  }

  loginUser(userLoginRequest: UserLoginRequest): Observable<any> {
    return this.httpClient.post(`${this.url}/api/auth/login`, userLoginRequest);
  }

  public register(registerRequest: UserRegistrationRequest): Observable<any> {
    return this.httpClient.post(`${this.url}/api/auth/signup`, registerRequest);
  }

  saveUser(data) {
    return this.saveUserToStorage(data).then(() => {
      return new loginUserActions.LoginUserSuccess()
    });

  }

  async saveUserToStorage(data) {
    await this.storage.set(TOKEN_KEY, data.authenticationToken)
    await this.storage.set('username', data.username)
  }

  logout() {
    this.storage.remove(TOKEN_KEY);
    this.router.navigate(['/']);
  }
}
