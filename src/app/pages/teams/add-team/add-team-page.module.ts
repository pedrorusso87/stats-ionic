import {NgModule} from '@angular/core';
import {AddTeamPageComponent} from './add-team-page.component';
import {AddTeamRoutingModule} from './add-team-routing.module';
import {IonicModule} from '@ionic/angular';
import {ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [AddTeamPageComponent],
  imports: [
    AddTeamRoutingModule,
    IonicModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class AddTeamPageModule {}
