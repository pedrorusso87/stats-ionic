import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { from, of } from 'rxjs';
import * as teamsActions from '../teams-actions';
import {TeamsService} from '../../../../auth/services/teams.service';

@Injectable()
export default class TeamsEffects {
  constructor(
    private actions$: Actions,
    private teamsService: TeamsService,
  ) {}

  getTeamsByUser$ = createEffect(() => this.actions$.pipe(
    ofType(teamsActions.GET_TEAMS_BY_USER),
    switchMap((data: any) => {
      return from(this.teamsService.getUserTeams(data.payload.username)).pipe(
        map((response) => {
          return new teamsActions.GetTeamsByUserSuccess(response)
        }),
        catchError(error =>
          of(new teamsActions.GetTeamsByUserFailed(error)))
      );
    })
  ));
}
