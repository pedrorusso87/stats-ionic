import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';
import {Store} from '@ngrx/store';
import * as fromGetUserActions from '../teams/store/teams-actions';
import * as fromGetUser from '../teams/store';
import {Teams} from '../teams/models/teams.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  username: string;
  loading = true;
  teamsList: Teams[] = [];
  getTeamsPending$ = this.store.select(fromGetUser.getTeamsByUserPending);
  getTeamsList$ = this.store.select(fromGetUser.getTeamsByUser);
  constructor(
    private authService: AuthService,
    private store: Store,
  ) {}


  async ngOnInit() {
    await this.authService.getUsername().then(response => {
      this.username = response;
    });
   const request = {
     username: this.username
   }
    this.store.dispatch(new fromGetUserActions.GetTeamsByUser(request))
    this.getTeamsPending$.pipe().subscribe(pending => {
      if(!pending) {
        this.getTeamsList$.pipe().subscribe(items => {
          if(items) {
            this.loading = false;
            this.teamsList = items.teamsList;
          }
        })
      }
    })
  }
}
