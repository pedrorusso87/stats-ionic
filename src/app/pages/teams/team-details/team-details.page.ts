import {Component, OnDestroy, OnInit} from '@angular/core';
import * as fromTeam from '../store';
import {Store} from '@ngrx/store';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';
import {getNewTeamError} from '../store';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.page.html',
  styleUrls: ['./team-details.page.scss'],
})
export class TeamDetailsPage implements OnInit, OnDestroy {

  addNewTeamPending$ = this.store.select(fromTeam.addNewTeamPending);
  getNewTeam$ = this.store.select(fromTeam.getNewTeam);
  getNewTeamError$ = this.store.select(fromTeam.getNewTeamError);
  subscription: Subscription;

  constructor(
    private store: Store,
    private alertController: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
    this.subscription = this.getNewTeamError$.pipe().subscribe((error) => {
      if (error) {
        this.store.dispatch(new fromTeam.ClearErrors())
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
