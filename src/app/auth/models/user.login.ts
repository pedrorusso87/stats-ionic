export interface UserLoginRequest {
  email: string,
  password: string
}

export interface LoginResponse {
  authenticationToken: string,
  username: string
  message: string,
  status: string
}

export interface LoggedUserState {
  loginPending: boolean;
  error: any;
  currentUser: any;
}
