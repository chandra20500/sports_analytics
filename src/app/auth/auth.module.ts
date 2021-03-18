import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { I18nModule } from '@app/shared/i18n/i18n.module';
import { AuthRoutingModule } from './auth-routing.module';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import * as fromGuards from './guards';

@NgModule({
  declarations: [...fromContainers.containers, fromComponents.components],
  imports: [SharedModule, AuthRoutingModule, I18nModule],
  providers: [...fromServices.services, ...fromGuards.guards],
})
export class AuthModule {}
