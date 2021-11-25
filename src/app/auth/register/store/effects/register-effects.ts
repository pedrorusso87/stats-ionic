import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../../../services/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import * as registerUserActions from '../register-actions';

@Injectable()
export default class RegisterEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(registerUserActions.REGISTER_USER),
    switchMap((data: any) => {
      return from(this.authService.register(data.payload)).pipe(
        map((response) => {
          return new registerUserActions.RegisterUserSuccess();
        }),
        catchError(error =>
          of(new registerUserActions.RegisterUserFailed(error)))
      );
    })
  ));
}
