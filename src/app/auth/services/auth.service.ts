import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Platform} from '@ionic/angular';
import {Storage} from '@ionic/storage-angular'
import {from, Observable} from "rxjs";
import {map, switchMap} from "rxjs/operators";
import {LoginResponse, UserLoginRequest} from "../models/user.login";
import {environment} from "../../../environments/environment";
import {Router} from "@angular/router";

const TOKEN_KEY = 'authToken';

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
    this.loadTokenFromStore();
  }

  loadTokenFromStore() {
    this.user = from(this.platform.ready()).pipe(
      switchMap(() => {
        return from(this.storage.get(TOKEN_KEY))
      }),
      map(token => {
        console.log('got token')
      })
    )
  }

  loginUser(userLoginRequest: UserLoginRequest): Observable<any> {
    console.log(this.httpClient.post(`${this.url}/api/auth/login`, userLoginRequest))
    return this.httpClient.post(`${this.url}/api/auth/login`, userLoginRequest);
  }

  logout() {
    this.storage.remove(TOKEN_KEY);
    this.router.navigate(['/']);
  }
}
