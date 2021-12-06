import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ComponentsModule} from '../../components/components.module';
import {TabsPageModule} from '../tabs/tabs.module';
import {StoreModule} from '@ngrx/store';
import {effects, reducers} from '../../pages/home/store';
import {EffectsModule} from '@ngrx/effects';
import {CardsComponentsModule} from '../../components/cards/cards.components.module';

@NgModule({

    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        HomeRoutingModule,
        ComponentsModule,
        TabsPageModule,
        StoreModule.forFeature('getTeams', reducers),
        EffectsModule.forFeature(effects),
        CardsComponentsModule,
    ],
  exports: [],
  declarations: [HomeComponent]
})
export class HomePageModule {}
