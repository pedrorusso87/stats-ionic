import { Action } from '@ngrx/store';
import {UserTeamsRequest, UserTeamsResponse} from '../models/teams.model';

//Teams actions
export const GET_TEAMS_BY_USER = '[TEAMS] get teams by user';
export const GET_TEAMS_BY_USER_SUCCESS = '[TEAMS] get teams by user success';
export const GET_TEAMS_BY_USER_FAIL = '[TEAMS] get teams by user failed';

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
// action types
export type GetTeamsByUserActions = GetTeamsByUser | GetTeamsByUserSuccess | GetTeamsByUserFailed;
