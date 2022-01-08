import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';
import {AddTeamRequest} from '../models/teams.model';
import {Store} from '@ngrx/store';
import * as fromTeams from '../store/teams-actions';
import {Router} from '@angular/router';
import {AuthService} from '../../../auth/services/auth.service';


@Component({
  selector: 'app-add-team-page',
  templateUrl: './add-team-page.component.html',
  styleUrls: ['./add-team-page.component.scss'],
})
export class AddTeamPageComponent implements OnInit {
  addTeamForm: FormGroup;
  teamName = new FormControl('',
    Validators.compose([ Validators.required, Validators.maxLength(20)]));
  dateCreated = new FormControl('', Validators.required);
  foundationDate = new FormControl('', Validators.required);
  today = new Date().toISOString();
  username: string;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router,
    private authService: AuthService
  ) {
    this.addTeamForm = this.fb.group({
      teamName: this.teamName,
      dateCreated: this.today,
      foundationDate: this.foundationDate
    });
  }

  ngOnInit() {}

  handleChange(date: any) {
    console.log(date.value);
    const formattedDate = formatDate(date.value, 'YYYY-MM-dd', 'en-US');
    console.log(formattedDate);
    this.setFoundationDate(formattedDate);
  }

  getFoundationDate() {
    return this.addTeamForm.get('foundationDate')?.value;
  }

  getTeamName() {
    return this.addTeamForm.get('teamName')?.value;
  }

  setFoundationDate(value: string): void {
    this.addTeamForm.get('foundationDate').setValue(value);
  }

  async saveTeam() {
    const createdRequest = await this.createAddTeamRequest().then((request => request));
    this.store.dispatch(new fromTeams.AddNewTeam(createdRequest));
    this.router.navigate(['team-summary']);
  }

  private async createAddTeamRequest() {
    await this.getUsername().then(username => {
      this.username = username;
    });
    return {
      foundationDate: this.getFoundationDate(),
      teamName: this.getTeamName(),
      dateCreated: this.today,
      teamOwner: {
        username: this.username
      }
    } as AddTeamRequest;
  }

  private async getUsername() {
    return await this.authService.getUsername().then((username) =>
      username
    );
  }
}
