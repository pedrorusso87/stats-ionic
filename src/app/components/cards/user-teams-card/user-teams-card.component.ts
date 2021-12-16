import {Component, Input, OnInit} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import {Team} from '../../../pages/teams/models/teams.model';
import {Store} from '@ngrx/store';
import * as fromTeams from '../../../pages/teams/store/teams-actions';

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
    this.store.dispatch(new fromTeams.SelectTeam(team))
    this.router.navigate(["/selected-user-team"])
  }
}
