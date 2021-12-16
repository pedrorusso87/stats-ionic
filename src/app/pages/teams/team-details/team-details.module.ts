import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamDetailsPageRoutingModule } from './team-details-routing.module';

import { TeamDetailsPage } from './team-details.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        TeamDetailsPageRoutingModule,
        ReactiveFormsModule
    ],
  exports: [
    TeamDetailsPage
  ],
  declarations: [TeamDetailsPage]
})
export class TeamDetailsPageModule {}
