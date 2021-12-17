import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
    /*
    * canActivate: Add Login Guard here
    */
  },
  {
    path: '',
    loadChildren: () => import('./auth/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'add-team',
    loadChildren: () => import('./pages/teams/add-team/add-team-page.module').then(m => m.AddTeamPageModule)
  },
  {
    path: 'team-details',
    loadChildren: () => import('./pages/teams/team-details/team-details.module').then(m => m.TeamDetailsPageModule)
  },
  {
    path: 'team-summary',
    loadChildren: () => import('./pages/teams/team-summary/team-summary.module').then(m => m.TeamSummaryPageModule)
  },  {
    path: 'selected-user-team',
    loadChildren: () => import('./pages/teams/selected-user-team/selected-user-team.module').then( m => m.SelectedUserTeamPageModule)
  },
  {
    path: 'player-details',
    loadChildren: () => import('./pages/players/player-details/player-details.module').then( m => m.PlayerDetailsPageModule)
  }



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
