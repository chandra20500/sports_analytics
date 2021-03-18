import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import * as fromGuards from './guards';

@NgModule({
  declarations: [...fromContainers.containers, fromComponents.components],
  imports: [SharedModule, AboutRoutingModule],
  providers: [...fromServices.services, ...fromGuards.guards],
})
export class AboutModule {}
