import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.HomeComponent,
    children: [
      /*{
        path: 'about',
        loadChildren: () => import('../about/about.module').then((m) => m.AboutModule),
      },*/
      {
        path: 'roaster',
        component: fromContainers.RoasterComponent,
      },
      {
        path: 'playerdetails',
        component: fromContainers.PlayerDetailsComponent,
      },
      {
        path: 'trade',
        component: fromContainers.TradeAnalysisComponent,
      },
      {
        path: 'trade/team-selection',
        component: fromContainers.TeamSelectionComponent,
      },
      {
        path: 'trade/player-selection',
        component: fromContainers.PlayerSelectionComponent,
      },
      {
        path: 'trade/trade-overview',
        component: fromContainers.TradeOverviewComponent,
      },
    ],
  },
  // {
  //   path: 'roaster',
  //   component: fromContainers.RoasterComponent,
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
