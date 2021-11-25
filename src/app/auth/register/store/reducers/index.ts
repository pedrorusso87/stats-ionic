import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromRegisteredUser from './register.reducer';
import {RegisteredUserState} from '../../../models/user.register';
import {RegisterUserActions} from '../register-actions';

export interface RegisteredState {
  registeredUser: RegisteredUserState;
}

export const reducers: ActionReducerMap<RegisteredState, RegisterUserActions> = {
  registeredUser: fromRegisteredUser.reducer
};

const registerUserState = createFeatureSelector<RegisteredState>('registeredUser');

export const getRegisteredUserState = createSelector(registerUserState, (state: RegisteredState) => state.registeredUser);
export const gerRegisterUserPending = createSelector(getRegisteredUserState, (state: RegisteredUserState) => state.registerPending);
