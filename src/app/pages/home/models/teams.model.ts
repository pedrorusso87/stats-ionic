export interface UserTeamsRequest {
  username: string
}
export interface UserTeamsResponse {
  username: string,
  teamsList: Teams[]
}

export interface Teams {
  id: number,
  name: string,
  status: string,
  foundationDate: string,
  dateCreated: string
}
export interface GetTeamsState {
  getTeamsPending: boolean;
  error: any;
  teams: any;
}
