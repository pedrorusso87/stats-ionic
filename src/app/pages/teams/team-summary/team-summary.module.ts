import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TeamSummaryPageRoutingModule } from './team-summary-routing.module';

import { TeamSummaryPage } from './team-summary.page';
import {TeamDetailsPageModule} from '../team-details/team-details.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TeamSummaryPageRoutingModule,
    TeamDetailsPageModule
  ],
  declarations: [TeamSummaryPage]
})
export class TeamSummaryPageModule {}
