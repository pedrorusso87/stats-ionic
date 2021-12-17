import * as fromPlayers from '../players-actions';
import {from} from 'rxjs';
import {PlayersState} from '../../models/players.model';

const initialState: PlayersState = {
  pending: {
    getPlayersByTeamPending: false,
  },
  error: null,
  players: null,
};

export function reducer(state = initialState, action: fromPlayers.PlayersActions): PlayersState {
  switch (action.type) {
    case fromPlayers.GET_PLAYERS_BY_TEAM: {
      return {
        ...state,
        pending: {
          ...state.pending,
          getPlayersByTeamPending: true,
        }
      };
    }
    case fromPlayers.GET_PLAYERS_BY_TEAM_SUCCESS: {
      return {
        ...state,
        pending: {
          ...state.pending,
          getPlayersByTeamPending: false,
        },
        error: null,
        players: action.payload
      };
    }
    case fromPlayers.GET_PLAYERS_BY_TEAM_FAIL: {
      return {
        ...state,
        pending: {
          ...state.pending,
          getPlayersByTeamPending: false,
        },
        error: action.payload
      };
    }
    case fromPlayers.CLEAR_ERRORS: {
      return {
        ...state,
        error: null
      };
    }
    default: {
      return { ...state };
    }
  }
}

