import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeamSummaryPage } from './team-summary.page';

const routes: Routes = [
  {
    path: '',
    component: TeamSummaryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamSummaryPageRoutingModule {}
