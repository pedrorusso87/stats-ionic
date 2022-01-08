import { Action } from '@ngrx/store';
import {GetPlayersByTeamRequest, GetPlayersByTeamResponse} from '../models/players.model';

//Teams actions GET Teams
export const GET_PLAYERS_BY_TEAM = '[PLAYERS] get players by team';
export const GET_PLAYERS_BY_TEAM_SUCCESS = '[PLAYERS] get players by team success';
export const GET_PLAYERS_BY_TEAM_FAIL = '[PLAYERS] get players by team failed';

//Teams actions CLEAR errors
export const CLEAR_ERRORS = '[PLAYERS] clear errors';

export class GetPlayersByTeam implements Action {
  readonly type = GET_PLAYERS_BY_TEAM;
  constructor(public payload: GetPlayersByTeamRequest) {}
}

export class GetPlayersByTeamSuccess implements Action {
  readonly type = GET_PLAYERS_BY_TEAM_SUCCESS;
  constructor(public payload: GetPlayersByTeamResponse[]) {}
}

export class GetPlayersByTeamFailed implements Action {
  readonly type = GET_PLAYERS_BY_TEAM_FAIL;
  constructor( public payload: any) {}
}

export class ClearErrors implements Action {
  readonly type = CLEAR_ERRORS;
  constructor() {}
}
// action types
export type PlayersActions =
  GetPlayersByTeam | GetPlayersByTeamSuccess | GetPlayersByTeamFailed | ClearErrors;

