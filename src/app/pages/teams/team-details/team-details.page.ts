import {Component, Input, OnInit} from '@angular/core';
import {Team} from '../models/teams.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import * as fromPlayers from '../../players/store/reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
@Input() team: Team;

  getPlayersByTeamPending$ = this.store.select(fromPlayers.getPlayersByTeamStatePending)
  playersByTeam$ = this.store.select(fromPlayers.getPlayersByTeam)
  players: any
  modifyTeamForm: FormGroup;
  teamName = new FormControl('',
    Validators.compose([ Validators.required, Validators.maxLength(20)]));
  teamOwner = new FormControl('', Validators.required);
  foundationDate = new FormControl('', Validators.required);
  modifyButtonDisabled = true;

  constructor(
    private fb: FormBuilder,
    private store: Store
  ) {
    this.modifyTeamForm = this.fb.group({
      teamName: this.teamName,
      teamOwner: this.teamOwner,
      foundationDate: this.foundationDate
    })
  }

  ngOnInit() {
    this.playersByTeam$.pipe().subscribe(players => {
      this.players = players;
    })
    this.setControlValues();
  }

  getDummyName() {
    return 'Diego Maradona'
  }

  teamNameChange() {
    console.log(this.team.name)
    console.log(this.getTeamName().value)
    this.modifyButtonDisabled = this.getTeamName().value === this.team.name;
    console.log(this.modifyButtonDisabled)
  }

  setControlValues() {
    this.getTeamName().setValue(this.team.name)
    this.getTeamOwner().setValue(this.getDummyName())
    this.getFoundationDate().setValue(this.team.foundationDate)
  }

  getTeamName(): any {
    return this.modifyTeamForm.get('teamName');
  }

  getTeamOwner(): any {
    return this.modifyTeamForm.get('teamOwner');
  }

  getFoundationDate(): any {
    return this.modifyTeamForm.get('foundationDate');
  }

  modificationEnabled() {
    return this.modifyTeamForm.dirty || this.modifyTeamForm.touched
  }
}
