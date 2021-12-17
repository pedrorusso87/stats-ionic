import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'players-list-component',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss'],
})
export class PlayersListComponent implements OnInit {
@Input() players: []
  constructor() { }

  ngOnInit() {
  console.log(this.players)
  }

}
