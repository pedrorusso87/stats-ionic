export interface UserLoginRequest {
  username: string,
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

export interface LoginResponseError {
  error: string,
  headers: string
  ok: boolean,
  status: number
}
