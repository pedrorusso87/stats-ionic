import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {Team} from '../../../pages/teams/models/teams.model';
import {Store} from '@ngrx/store';
import * as fromTeams from '../../../pages/teams/store/teams-actions';
import * as fromPlayers from '../../../pages/players/store/players-actions';

@Component({
  selector: 'user-teams-card',
  templateUrl: './user-teams-card.component.html',
  styleUrls: ['./user-teams-card.component.scss'],
})
export class UserTeamsCardComponent implements OnInit {
@Input() teamsList: Team[];
  constructor(
    private router: Router,
    private store: Store
  ) { }

  ngOnInit() {
  }

  getStatusText(status: string): string {
    return status === 'ACTIVE' ? 'ACTIVO' : 'DE BAJA'
  }

  navigate() {
    this.router.navigate(['add-team'])
  }

  onTeamClicked(team: Team) {
    this.store.dispatch(new fromTeams.SelectTeam(team)) //-> add the call to players here?
    this.store.dispatch(new fromPlayers.GetPlayersByTeam( {teamId: team.id.toString()}))
    this.router.navigate(["/selected-user-team"])
  }
}
