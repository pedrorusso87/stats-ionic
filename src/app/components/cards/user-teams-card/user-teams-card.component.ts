import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Teams} from '../../../pages/teams/models/teams.model';

@Component({
  selector: 'user-teams-card',
  templateUrl: './user-teams-card.component.html',
  styleUrls: ['./user-teams-card.component.scss'],
})
export class UserTeamsCardComponent implements OnInit {
@Input() teamsList: Teams[];
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    console.log(this.teamsList)
  }

  getStatusText(status: string): string {
    return status === 'ACTIVE' ? 'ACTIVO' : 'DE BAJA'
  }

  navigate() {
    this.router.navigate(['add-team'])
  }
}
