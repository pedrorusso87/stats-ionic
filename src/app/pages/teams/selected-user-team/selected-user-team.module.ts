import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectedUserTeamPageRoutingModule } from './selected-user-team-routing.module';

import { SelectedUserTeamPage } from './selected-user-team.page';
import {TeamDetailsPageModule} from '../team-details/team-details.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SelectedUserTeamPageRoutingModule,
        TeamDetailsPageModule
    ],
  declarations: [SelectedUserTeamPage]
})
export class SelectedUserTeamPageModule {}
