import * as fromTeams from '../teams-actions';
import {TeamsState} from '../../models/teams.model';

const initialState: TeamsState = {
  pending: {
    getTeamsPending: false,
    addTeamsPending: false
  },
  error: null,
  teams: null,
  newTeam: null
};

export function reducer(state = initialState, action: fromTeams.TeamsActions): TeamsState {
  switch (action.type) {
    case fromTeams.GET_TEAMS_BY_USER: {
      return {
        ...state,
        pending: {
          ...state.pending,
          getTeamsPending: true,
        }
      };
    }
    case fromTeams.GET_TEAMS_BY_USER_SUCCESS: {
      return {
        ...state,
        pending: {
          ...state.pending,
          getTeamsPending: false,
        },
        error: null,
        teams: action.payload
      };
    }
    case fromTeams.GET_TEAMS_BY_USER_FAIL: {
      return {
        ...state,
        pending: {
          ...state.pending,
          getTeamsPending: false,
        },
        error: action.payload
      };
    }
    case fromTeams.ADD_NEW_TEAM: {
      return {
        ...state,
        pending: {
          ...state.pending,
          addTeamsPending: true
        }
      };
    }
    case fromTeams.ADD_NEW_TEAM_SUCCESS: {
      return {
        ...state,
        pending: {
          ...state.pending,
          addTeamsPending: false
        },
        newTeam: action.payload
      };
    }
    case fromTeams.ADD_NEW_TEAM_FAILED: {
      return {
        ...state,
        pending: {
          ...state.pending,
          addTeamsPending: false
        },
        error: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}

