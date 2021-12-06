import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {UserTeamsCardComponent} from './user-teams-card/user-teams-card.component';

@NgModule({

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  exports: [UserTeamsCardComponent],
  declarations: [UserTeamsCardComponent]
})
export class CardsComponentsModule {}
