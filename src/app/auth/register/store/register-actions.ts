import {Action} from '@ngrx/store';
import {UserRegistrationRequest} from '../../models/user.register';

//Register actions
export const REGISTER_USER = '[AUTH] Register user';
export const REGISTER_USER_SUCCESS = '[AUTH] Register user success';
export const REGISTER_USER_FAILED = '[AUTH] Register user failed';

export class RegisterUser implements Action {
  readonly type = REGISTER_USER;
  constructor(public payload: UserRegistrationRequest) {
  }
}
export class RegisterUserSuccess implements Action {
  readonly type = REGISTER_USER_SUCCESS;
  constructor() {
  }
}

export class RegisterUserFailed implements Action {
  readonly type = REGISTER_USER_FAILED;
  constructor(public payload: any) {
  }
}

export type RegisterUserActions = RegisterUser | RegisterUserSuccess | RegisterUserFailed;
