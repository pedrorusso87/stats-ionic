export interface GetPlayersByTeamRequest {
  teamId: string;
}

export interface GetPlayersByTeamResponse {
  playerName: string;
  documentNumber: string;
  dateOfBirth: string;
  status: string;
}

export interface PlayersState {
  pending: {
    getPlayersByTeamPending: boolean;
  };
  error: any;
  players: GetPlayersByTeamResponse[];
}
