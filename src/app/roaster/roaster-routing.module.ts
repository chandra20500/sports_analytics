import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoasterRoutingModule {}
