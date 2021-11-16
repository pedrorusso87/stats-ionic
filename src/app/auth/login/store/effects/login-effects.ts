import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../../../services/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import * as loginUserActions from '../login-actions';

@Injectable()
export default class LoginEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(loginUserActions.LOGIN_USER),
    switchMap((data: any) => {
      return from(this.authService.loginUser(data.payload)).pipe(
        map((response) => {
          return new loginUserActions.SaveUserToStorage(response);
        }),
        catchError(error =>
          of(new loginUserActions.LoginUserFailed(error)))
      );
    })
  ));

  saveUserToStorage$ = createEffect(() =>  this.actions$.pipe(
    ofType(loginUserActions.SAVE_USER),
    switchMap((data: any) => {
      return of(this.authService.saveUser(data.payload));
    })
  ));
}
