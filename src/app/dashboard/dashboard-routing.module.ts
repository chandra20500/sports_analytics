import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.CoachDashboardComponent,
  },
  {
    path: 'admin',
    component: fromContainers.AdminDashboardComponent,
  },
  {
    path: 'drill-list',
    component: fromContainers.DrillListComponent,
  },
  {
    path: 'player-list',
    component: fromContainers.PlayerListComponent,
  },
  {
    path: 'team-list',
    component: fromContainers.TeamListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
