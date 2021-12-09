import { Action } from '@ngrx/store';
import {AddTeamRequest, AddTeamResponse, UserTeamsRequest, UserTeamsResponse} from '../models/teams.model';

//Teams actions GET Teams
export const GET_TEAMS_BY_USER = '[TEAMS] get teams by user';
export const GET_TEAMS_BY_USER_SUCCESS = '[TEAMS] get teams by user success';
export const GET_TEAMS_BY_USER_FAIL = '[TEAMS] get teams by user failed';

//Teams actions ADD Team
export const ADD_NEW_TEAM = '[TEAMS] add new team';
export const ADD_NEW_TEAM_SUCCESS = '[TEAMS] add new team success';
export const ADD_NEW_TEAM_FAILED = '[TEAMS] add new team failed';

export class GetTeamsByUser implements Action {
  readonly type = GET_TEAMS_BY_USER;
  constructor( public payload: UserTeamsRequest) {}
}

export class GetTeamsByUserSuccess implements Action {
  readonly type = GET_TEAMS_BY_USER_SUCCESS;
  constructor(public payload: UserTeamsResponse) {}
}

export class GetTeamsByUserFailed implements Action {
  readonly type = GET_TEAMS_BY_USER_FAIL;
  constructor( public payload: any) {}
}

export class AddNewTeam implements Action {
  readonly type = ADD_NEW_TEAM;
  constructor( public payload: AddTeamRequest ) {}
}

export class AddNewTeamSuccess implements Action {
  readonly type = ADD_NEW_TEAM_SUCCESS;
  constructor(public payload: AddTeamResponse) {}
}

export class AddNewTeamFailed implements Action {
  readonly type = ADD_NEW_TEAM_FAILED;
  constructor( public payload: any) {}
}
// action types
export type TeamsActions = GetTeamsByUser | GetTeamsByUserSuccess | GetTeamsByUserFailed
  | AddNewTeam | AddNewTeamSuccess | AddNewTeamFailed;
