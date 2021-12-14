import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Team} from '../../../pages/teams/models/teams.model';

@Component({
  selector: 'user-teams-card',
  templateUrl: './user-teams-card.component.html',
  styleUrls: ['./user-teams-card.component.scss'],
})
export class UserTeamsCardComponent implements OnInit {
@Input() teamsList: Team[];
  constructor(
    private router: Router
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
    console.log(team.name)
    this.router.navigate(["/team-details", team])
  }
}
