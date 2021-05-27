import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CoachDashboardComponent } from './coach-dashboard/coach-dashboard.component';
import { DrillListComponent } from './drill-list/drill-list.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { TeamListComponent } from './team-list/team-list.component';

export const containers = [
  CoachDashboardComponent,
  AdminDashboardComponent,
  DrillListComponent,
  PlayerListComponent,
  TeamListComponent,
];

export * from './drill-list/drill-list.component';
export * from './player-list/player-list.component';
export * from './team-list/team-list.component';
export * from './coach-dashboard/coach-dashboard.component';
export * from './admin-dashboard/admin-dashboard.component';
