export interface RegisteredUserState {
  registerPending: boolean,
  error: null,
  username: null
}
export interface UserRegistrationRequest {
  username: string,
  email: string,
  password: string
}
