import { HomeComponent } from '@app/home/containers/home/home.component';
import { RoasterComponent } from '@app/home/containers/roaster/roaster.component';
import { PlayerDetailsComponent } from '@app/home/containers/roaster/player-details/player-details.component';
import { TradeAnalysisComponent } from '@app/home/containers/trade-analysis/trade-analysis.component';
import { TeamSelectionComponent } from '@app/home/containers/trade-analysis/team-selection/team-selection.component';
import { PlayerSelectionComponent } from '@app/home/containers/trade-analysis/player-selection/player-selection.component';
import { TradeOverviewComponent } from '@app/home/containers/trade-analysis/trade-overview/trade-overview.component';
import { PracticePlansComponent } from '@app/home/containers/practice-plans/practice-plans.component';

export const containers = [
  HomeComponent,
  RoasterComponent,
  PlayerDetailsComponent,
  TradeAnalysisComponent,
  TeamSelectionComponent,
  PlayerSelectionComponent,
  TradeOverviewComponent,
  PracticePlansComponent,
];

export * from './home/home.component';
export * from './roaster/roaster.component';
export * from './roaster/player-details/player-details.component';
export * from './trade-analysis/trade-analysis.component';
export * from './trade-analysis/team-selection/team-selection.component';
export * from './trade-analysis/player-selection/player-selection.component';
export * from './trade-analysis/trade-overview/trade-overview.component';
export * from './practice-plans/practice-plans.component';
