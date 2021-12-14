import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import * as fromTeam from '../store';
import {Store} from '@ngrx/store';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {Team} from '../models/teams.model';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {
@Input() team: Team;

  constructor(
    private store: Store,
    private alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {}

  getDummyName() {
    return 'Diego Maradona'
  }

  change() {

  }
}
