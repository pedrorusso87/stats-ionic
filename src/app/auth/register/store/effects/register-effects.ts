import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { AuthService } from '../../../services/auth.service';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import * as registerUserActions from '../register-actions';

@Injectable()
export default class RegisterEffects {

  loginUser$ = createEffect(() => this.actions$.pipe(
    ofType(registerUserActions.REGISTER_USER),
    switchMap((data: any) => from(this.authService.register(data.payload)).pipe(
        map(() => new registerUserActions.RegisterUserSuccess()),
        catchError(error =>
          of(new registerUserActions.RegisterUserFailed(error)))
      ))
  ));

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {}
}
