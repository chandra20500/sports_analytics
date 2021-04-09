import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { I18nModule } from '@app/shared/i18n/i18n.module';
import { MaterialModule } from 'src/app/material.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import * as fromGuards from './guards';

@NgModule({
  declarations: [...fromContainers.containers, fromComponents.components],
  imports: [SharedModule, HomeRoutingModule, I18nModule, MaterialModule],
  providers: [...fromServices.services, ...fromGuards.guards],
})
export class HomeModule {}
