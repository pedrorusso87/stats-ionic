import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGetTeams from './teams.reducer';
import {TeamsState} from '../../models/teams.model';
import {TeamsActions} from '../teams-actions';

export interface TeamsPageState {
  getTeams: TeamsState;
}

export const reducers: ActionReducerMap<TeamsPageState, TeamsActions> = {
  getTeams: fromGetTeams.reducer,
};

const teamsState = createFeatureSelector<TeamsPageState>('getTeams');

export const getTeamsState = createSelector(teamsState, (state: TeamsPageState) => state.getTeams);

export const getTeamsByUserPending = createSelector(getTeamsState, (state: TeamsState) => state.pending.getTeamsPending);
export const getTeamsByUser = createSelector(getTeamsState, (state: TeamsState) => state.teams);
export const getTeamsByUserError = createSelector(getTeamsState, (state: TeamsState) => state.error);

export const addNewTeamPending = createSelector(getTeamsState, (state: TeamsState) => state.pending.addTeamsPending);
export const getNewTeamUser = createSelector(getTeamsState, (state: TeamsState) => state.newTeam);
