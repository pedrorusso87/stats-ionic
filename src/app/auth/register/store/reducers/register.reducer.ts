import * as fromRegister from '../register-actions';
import {RegisteredUserState} from '../../../models/user.register';

const initialState: RegisteredUserState = {
  registerPending: false,
  error: null,
  username: null
};

export function reducer(state = initialState, action: fromRegister.RegisterUserActions): RegisteredUserState {
  switch (action.type) {
    case fromRegister.REGISTER_USER: {
      return {
        ...state,
        registerPending: true,
      };
    }
    case fromRegister.REGISTER_USER_SUCCESS: {
      return {
        ...state,
        registerPending: false,
        error: null
      };
    }
    case fromRegister.REGISTER_USER_FAILED: {
      return {
        ...state,
        registerPending: false,
        error: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}

