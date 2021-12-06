import {Component, Input, OnInit} from '@angular/core';
import {Teams} from '../../../pages/home/models/teams.model';

@Component({
  selector: 'user-teams-card',
  templateUrl: './user-teams-card.component.html',
  styleUrls: ['./user-teams-card.component.scss'],
})
export class UserTeamsCardComponent implements OnInit {
@Input() teamsList: Teams[];
  constructor() { }

  ngOnInit() {
    console.log(this.teamsList)
  }


  onCardClicked() {
    console.log("addasd")
  }

  getStatusText(status: string): string {
    return status === 'ACTIVE' ? 'ACTIVO' : 'DE BAJA'
  }
}
