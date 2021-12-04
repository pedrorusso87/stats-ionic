import * as fromGetTeams from '../teams-actions';
import {GetTeamsState} from '../../models/teams.model';

const initialState: GetTeamsState = {
  getTeamsPending: false,
  error: null,
  teams: null
};

export function reducer(state = initialState, action: fromGetTeams.GetTeamsByUserActions): GetTeamsState {
  switch (action.type) {
    case fromGetTeams.GET_TEAMS_BY_USER: {
      return {
        ...state,
        getTeamsPending: true,
      };
    }
    case fromGetTeams.GET_TEAMS_BY_USER_SUCCESS: {
      return {
        ...state,
        getTeamsPending: false,
        error: null,
        teams: action.payload
      };
    }
    case fromGetTeams.GET_TEAMS_BY_USER_FAIL: {
      return {
        ...state,
        getTeamsPending: false,
        error: action.payload
      };
    }
    default: {
      return { ...state };
    }
  }
}

