import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './home.component';
import {HomeRoutingModule} from './home-routing.module';
import {ComponentsModule} from '../../components/components.module';
import {TabsPageModule} from '../tabs/tabs.module';

@NgModule({

  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    ComponentsModule,
    TabsPageModule
  ],
  exports: [],
  declarations: [HomeComponent]
})
export class HomePageModule {}
