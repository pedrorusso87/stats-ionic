import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  change() {
    console.log()
  }

  getTeamName() {
    return 'Napoles FC'
  }

  getDummyDate() {
    return '2020/01/01'
  }

  getDummyName() {
    return 'Diego Maradona'
  }
}
