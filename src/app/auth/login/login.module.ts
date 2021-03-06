import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import {AuthService} from "../services/auth.service";
import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { reducers, effects } from './store';
import {TabsPageModule} from '../../pages/tabs/tabs.module';
import {ComponentsModule} from '../../components/components.module';
@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      LoginPageRoutingModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule,
      StoreModule.forFeature('loggedUser', reducers),
      EffectsModule.forFeature(effects),
      TabsPageModule,
      ComponentsModule
    ],
  declarations: [LoginPage],
  providers: [AuthService]
})
export class LoginPageModule {}
