import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddTeamPageComponent} from './add-team-page.component';

const routes: Routes = [
  {
    path: '',
    component: AddTeamPageComponent,
    children: []
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class AddTeamRoutingModule {}
