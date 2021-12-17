import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromPlayers from './players.reducer';
import {PlayersState} from '../../models/players.model';
import {PlayersActions} from '../players-actions';

export interface PlayersPageState {
  players: PlayersState;
}

export const reducers: ActionReducerMap<PlayersPageState, PlayersActions> = {
  players: fromPlayers.reducer,
};

const playersState = createFeatureSelector<PlayersPageState>('players');

export const getPlayersState = createSelector(playersState, (state: PlayersPageState) => state.players);

export const getPlayersByTeamStatePending = createSelector(getPlayersState, (state: PlayersState) => state.pending.getPlayersByTeamPending);
export const getPlayersByTeam = createSelector(getPlayersState, (state: PlayersState) => state.players);
export const getPlayersByTeamError = createSelector(getPlayersState, (state: PlayersState) => state.error);

