import { Component, OnInit } from '@angular/core';
import * as fromTeam from '../store';
import {Store} from '@ngrx/store';

@Component({
  selector: 'selected-user-team',
  templateUrl: './selected-user-team.page.html',
  styleUrls: ['./selected-user-team.page.scss'],
})
export class SelectedUserTeamPage implements OnInit {

  selectedTeamPending$ = this.store.select(fromTeam.getSelectedTeamPending);
  selectedTeam$ = this.store.select(fromTeam.getSelectedTeam);

  constructor(private store: Store) {}

  ngOnInit() {
  }

}
