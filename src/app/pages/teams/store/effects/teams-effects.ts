import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as teamsActions from '../teams-actions';
import {TeamsService} from '../../../../services/teams.service';

@Injectable()
export default class TeamsEffects {

  getTeamsByUser$ = createEffect(() => this.actions$.pipe(
    ofType(teamsActions.GET_TEAMS_BY_USER),
    switchMap((data: any) => this.teamsService.getUserTeams(data.payload.username).pipe(
        map((response) => new teamsActions.GetTeamsByUserSuccess(response)),
        catchError(error =>
          of(new teamsActions.GetTeamsByUserFailed(error)))
      ))
  ));

  addNewTeam$ = createEffect(() => this.actions$.pipe(
    ofType(teamsActions.ADD_NEW_TEAM),
    switchMap((data: any) => this.teamsService.addNewTeam(data.payload).pipe(
        map((response) => new teamsActions.AddNewTeamSuccess(response)),
        catchError(error =>
        of(new teamsActions.AddNewTeamFailed(error)))
      ))
  ));

  selectTeam$ = createEffect(() => this.actions$.pipe(
    ofType(teamsActions.SELECT_TEAM),
    switchMap((data: any) => of(new teamsActions.SelectTeamSuccess(data.payload)))
  ));

  constructor(
    private actions$: Actions,
    private teamsService: TeamsService,
  ) {}
}
