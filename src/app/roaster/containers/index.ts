import { RoasterComponent } from 'src/app/roaster/containers/roaster/roaster.component';
import { PlayerDetailsComponent } from 'src/app/roaster/containers/player-details/player-details.component';
import { TradeAnalysisComponent } from 'src/app/roaster/containers/trade-analysis/trade-analysis.component';
import { TeamSelectionComponent } from 'src/app/roaster/containers/trade-analysis/team-selection/team-selection.component';
import { PlayerSelectionComponent } from 'src/app/roaster/containers/trade-analysis/player-selection/player-selection.component';
import { TradeOverviewComponent } from 'src/app/roaster/containers/trade-analysis/trade-overview/trade-overview.component';

export const containers = [
  RoasterComponent,
  PlayerDetailsComponent,
  TradeAnalysisComponent,
  TeamSelectionComponent,
  PlayerSelectionComponent,
  TradeOverviewComponent,
];

export * from '../../roaster/containers/roaster/roaster.component';
export * from '../../roaster/containers/player-details/player-details.component';
export * from '../../roaster/containers/trade-analysis/trade-analysis.component';
export * from '../../roaster/containers/trade-analysis/team-selection/team-selection.component';
export * from '../../roaster/containers/trade-analysis/player-selection/player-selection.component';
export * from '../../roaster/containers/trade-analysis/trade-overview/trade-overview.component';
