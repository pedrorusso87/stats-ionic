import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as playerActions from '../players-actions';
import {PlayersService} from '../../../../services/players.service';

@Injectable()
export default class PlayerEffects {
  constructor(
    private actions$: Actions,
    private playersService: PlayersService,
  ) {}

  getPlayersByTeam$ = createEffect(() => this.actions$.pipe(
    ofType(playerActions.GET_PLAYERS_BY_TEAM),
    switchMap((data: any) => {
      return this.playersService.getPlayersByTeam(data.payload.teamId).pipe(
        map((response) => {
          return new playerActions.GetPlayersByTeamSuccess(response)
        }),
        catchError(error =>
          of(new playerActions.GetPlayersByTeamFailed(error)))
      );
    })
  ));
}
