import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {formatDate} from '@angular/common';
import {AddTeamRequest} from '../models/teams.model';
import {Store} from '@ngrx/store';
import * as fromTeams from '../store/teams-actions'
import {Router} from '@angular/router';


@Component({
  selector: 'add-team-page',
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

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.addTeamForm = this.fb.group({
      teamName: this.teamName,
      dateCreated: this.today,
      foundationDate: this.foundationDate
    })
  }

  ngOnInit() {}

  handleChange(date: any) {
    const formattedDate = formatDate(date, 'YYYY-MM-dd', 'en-US')
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

  saveTeam() {
    this.store.dispatch(new fromTeams.AddNewTeam(this.createAddTeamRequest()))
    this.router.navigate(["team-details"])
  }

  private createAddTeamRequest() {
    const addTeamRequest = {
      foundationDate: this.getFoundationDate(),
      teamName: this.getTeamName(),
      dateCreated: this.today
    } as AddTeamRequest
    return addTeamRequest;
  }
}
