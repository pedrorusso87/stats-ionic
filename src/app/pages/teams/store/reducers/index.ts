import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromGetTeams from './teams.reducer';
import {TeamsState} from '../../models/teams.model';
import {TeamsActions} from '../teams-actions';

export interface TeamsPageState {
  teams: TeamsState;
}

export const reducers: ActionReducerMap<TeamsPageState, TeamsActions> = {
  teams: fromGetTeams.reducer,
};

const teamsState = createFeatureSelector<TeamsPageState>('teams');

export const getTeamsState = createSelector(teamsState, (state: TeamsPageState) => state.teams);

export const getTeamsByUserPending = createSelector(getTeamsState, (state: TeamsState) => state.pending.getTeamsPending);
export const getTeamsByUser = createSelector(getTeamsState, (state: TeamsState) => state.teams);
export const getTeamsByUserError = createSelector(getTeamsState, (state: TeamsState) => state.error);

export const addNewTeamPending = createSelector(getTeamsState, (state: TeamsState) => state.pending.addTeamsPending);
export const getNewTeam = createSelector(getTeamsState, (state: TeamsState) => state.newTeam);
export const getNewTeamError = createSelector(getTeamsState, (state: TeamsState) => state.error);

export const getSelectedTeam = createSelector(getTeamsState, (state: TeamsState) => state.selectedTeam);
export const getSelectedTeamPending = createSelector(getTeamsState, (state: TeamsState) => state.pending.selectTeamPending);
