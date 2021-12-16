import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectedUserTeamPage } from './selected-user-team.page';

const routes: Routes = [
  {
    path: '',
    component: SelectedUserTeamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectedUserTeamPageRoutingModule {}
