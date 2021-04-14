import { HomeComponent } from '@app/home/containers/home/home.component';
import { RoasterComponent } from '@app/home/containers/roaster/roaster.component';
import { PlayerDetailsComponent } from '@app/home/containers/roaster/player-details/player-details.component';

export const containers = [HomeComponent, RoasterComponent, PlayerDetailsComponent];

export * from './home/home.component';
export * from './roaster/roaster.component';
export * from './roaster/player-details/player-details.component';
