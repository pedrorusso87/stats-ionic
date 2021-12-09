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
export interface TeamsState {
  pending: {
    getTeamsPending: boolean;
    addTeamsPending: boolean
  }
  error: any;
  teams: any;
  newTeam: AddTeamResponse
}

export interface AddTeamRequest {
  teamName: string;
  dateCreated: string;
  foundationDate: string;
  teamOwner: TeamOwner;
}

export interface TeamOwner {
  id: number;
  email: string;
  username: string;
}

export interface AddTeamResponse {
  id: number;
  name: string;
  status: string;
  foundationDate: string;
  dateCreated: string;
}
