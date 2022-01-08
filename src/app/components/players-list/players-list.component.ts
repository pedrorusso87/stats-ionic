import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromPlayers from '../../pages/players/store';
import * as fromTeam from '../../pages/teams/store';
import {first, take} from 'rxjs/operators';
import {GetPlayersByTeamResponse} from '../../pages/players/models/players.model';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-players-list-component',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
  selectedTeam$ = this.store.select(fromTeam.getSelectedTeam);
  getPlayersByTeam$ = this.store.select(fromPlayers.getPlayersByTeam);
  teamId: string;
  players: any;
  playersList: GetPlayersByTeamResponse[];
  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectedTeam$.pipe(first()).subscribe(team => {
      this.teamId = team.id.toString();
      this.store.dispatch(new fromPlayers.GetPlayersByTeam( {teamId: this.teamId}));
    });
  }

  getPlayersByTeam() {

    this.loadPlayers();
  }

  loadPlayers() {
    this.getPlayersByTeam$.pipe(take(1)).subscribe(players => {
      this.players = players;
      this.playersList = this.players.playerList;
    });
  }

  openPlayerDetails(player: GetPlayersByTeamResponse) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        playerName: player.playerName,
        documentNumber: player.documentNumber,
        dateOfBirth: player.dateOfBirth
      }
    };

    this.router.navigate(['/player-details'], navigationExtras);
  }
}
