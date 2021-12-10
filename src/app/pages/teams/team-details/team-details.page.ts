import { Component, OnInit } from '@angular/core';
import * as fromGetUser from '../store';
import {Store} from '@ngrx/store';
import {addNewTeamPending, getNewTeam} from '../store';
import {AlertController} from '@ionic/angular';
import {error} from 'protractor';
import {Router} from '@angular/router';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit {

  addNewTeamPending$ = this.store.select(fromGetUser.addNewTeamPending);
  getNewTeam$ = this.store.select(fromGetUser.getNewTeam);
  getNewTeamError$ = this.store.select(fromGetUser.getNewTeamError);

  constructor(
    private store: Store,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.getNewTeamError$.pipe().subscribe(error => {
      if (error) {
        this.presentAlert();
      }
    })
  }

  change() {
    console.log()
  }

  getDummyName() {
    return 'Diego Maradona'
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Error al crear el equipo. Intente nuevamente',
      buttons: [{
        text: 'Volver',
        handler: () => {
          this.alertController.dismiss();
          this.router.navigate(["add-team"])
        }
      }],
    });

    await alert.present();
  }
}
