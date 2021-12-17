import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {UserTeamsCardComponent} from './user-teams-card/user-teams-card.component';
import {StoreModule} from '@ngrx/store';
import {effects, reducers} from '../../pages/players/store';
import {EffectsModule} from '@ngrx/effects';

@NgModule({

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    StoreModule.forFeature('players', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [UserTeamsCardComponent],
  declarations: [UserTeamsCardComponent]
})
export class CardsComponentsModule {}
