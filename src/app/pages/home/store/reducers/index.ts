import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGetTeams from './teams.reducer';
import {GetTeamsState} from '../../models/teams.model';
import {GetTeamsByUserActions} from '../teams-actions';

export interface TeamsState {
  getTeams: GetTeamsState;
}

export const reducers: ActionReducerMap<TeamsState, GetTeamsByUserActions> = {
  getTeams: fromGetTeams.reducer,
};

const teamsState = createFeatureSelector<TeamsState>('getTeams');

export const getTeamsState = createSelector(teamsState, (state: TeamsState) => state.getTeams);

export const getTeamsByUserPending = createSelector(getTeamsState, (state: GetTeamsState) => state.getTeamsPending);
export const getTeamsByUser = createSelector(getTeamsState, (state: GetTeamsState) => state.teams);
export const getTeamsByUserError = createSelector(getTeamsState, (state: GetTeamsState) => state.error);

