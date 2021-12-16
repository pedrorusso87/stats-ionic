import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AlertController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {Team} from '../models/teams.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {UserRegistrationRequest} from '../../../auth/models/user.register';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
@Input() team: Team;

  modifyTeamForm: FormGroup;
  teamName = new FormControl('',
    Validators.compose([ Validators.required, Validators.maxLength(20)]));
  teamOwner = new FormControl('', Validators.required);
  foundationDate = new FormControl('', Validators.required);

  constructor(
    private fb: FormBuilder
  ) {
    this.modifyTeamForm = this.fb.group({
      teamName: this.teamName,
      teamOwner: this.teamOwner,
      foundationDate: this.foundationDate
    })
  }

  ngOnInit() {

    console.log(this.team)
  }

  getDummyName() {
    return 'Diego Maradona'
  }

  change() {

  }

  modificationEnabled() {

  }
}
