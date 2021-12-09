import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


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
    private fb: FormBuilder
  ) {
    this.addTeamForm = this.fb.group({
      teamName: this.teamName,
      dateCreated: this.dateCreated,
      foundationDate: this.foundationDate
    })
  }

  ngOnInit() {}

}
