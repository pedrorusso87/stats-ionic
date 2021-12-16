import { Action } from '@ngrx/store';
import {AddTeamRequest, AddTeamResponse, Team, UserTeamsRequest, UserTeamsResponse} from '../models/teams.model';

//Teams actions GET Teams
export const GET_TEAMS_BY_USER = '[TEAMS] get teams by user';
export const GET_TEAMS_BY_USER_SUCCESS = '[TEAMS] get teams by user success';
export const GET_TEAMS_BY_USER_FAIL = '[TEAMS] get teams by user failed';

//Teams actions ADD Team
export const ADD_NEW_TEAM = '[TEAMS] add new team';
export const ADD_NEW_TEAM_SUCCESS = '[TEAMS] add new team success';
export const ADD_NEW_TEAM_FAILED = '[TEAMS] add new team failed';

//Teams actions SELECT Team
export const SELECT_TEAM = '[TEAMS] select user team';
export const SELECT_TEAM_SUCCESS = '[TEAMS] select user team success';
export const SELECT_TEAM_FAILED = '[TEAMS] select user team failed';

//Teams actions CLEAR errors
export const CLEAR_ERRORS = '[TEAMS] clear errors';

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

export class SelectTeam implements Action {
  readonly type = SELECT_TEAM;
  constructor( public payload: any ) {}
}

export class SelectTeamSuccess implements Action {
  readonly type = SELECT_TEAM_SUCCESS;
  constructor(public payload: Team) {}
}

export class SelectTeamFailed implements Action {
  readonly type = SELECT_TEAM_FAILED;
  constructor( public payload: any) {}
}

export class ClearErrors implements Action {
  readonly type = CLEAR_ERRORS;
  constructor() {}
}
// action types
export type TeamsActions =
  GetTeamsByUser | GetTeamsByUserSuccess | GetTeamsByUserFailed
  | AddNewTeam | AddNewTeamSuccess | AddNewTeamFailed | ClearErrors
  | SelectTeam | SelectTeamSuccess | SelectTeamFailed;
