import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {LoadingController, Platform} from '@ionic/angular';
import { Storage } from '@ionic/storage-angular'
import {from, Observable } from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import { UserLoginRequest } from '../models/user.login';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import * as loginUserActions from '../login/store/login-actions';

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

  loginUser(userLoginRequest: UserLoginRequest): Observable<any> {
    return this.httpClient.post(`${this.url}/api/auth/login`, userLoginRequest);
  }

  saveUser(data) {
    this.storage.set(TOKEN_KEY, data.authenticationToken)
    this.storage.set('username', data.username)
    return new loginUserActions.LoginUserSuccess()
  }

  logout() {
    this.storage.remove(TOKEN_KEY);
    this.router.navigate(['/']);
  }
}
