import {Component, OnDestroy, OnInit} from '@angular/core';
import * as fromTeam from '../store';
import {Subscription} from 'rxjs';
import {Store} from '@ngrx/store';
import {AlertController} from '@ionic/angular';
import {Router} from '@angular/router';

const BAD_REQUEST_ERROR = 'BAD_REQUEST';

@Component({
  selector: 'app-team-summary',
  templateUrl: './team-summary.page.html',
  styleUrls: ['./team-summary.page.scss'],
})
export class TeamSummaryPage implements OnInit, OnDestroy {

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
    this.subscription = this.getNewTeamError$.pipe().subscribe((httpErrorResponse) => {
      if (httpErrorResponse) {
        this.store.dispatch(new fromTeam.ClearErrors())
        this.presentAlert(httpErrorResponse.error);
      }
    })
  }

  change() {
    console.log()
  }

  getDummyName() {
    return 'Diego Maradona'
  }

  async presentAlert(error: any) {
    const alert = await this.alertController.create({
      message: this.getErrorMessage(error),
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

  getErrorMessage(error: any): string {
    return error.status === BAD_REQUEST_ERROR ? error.message : 'Error al crear el equipo. Intente nuevamente'
  }

}
