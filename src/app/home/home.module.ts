import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { I18nModule } from '@app/shared/i18n/i18n.module';
import { MaterialModule } from 'src/app/material.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import * as fromGuards from './guards';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChartsModule } from 'ng2-charts';
@NgModule({
  declarations: [...fromContainers.containers, fromComponents.components],
  imports: [
    SharedModule,
    HomeRoutingModule,
    I18nModule,
    MaterialModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ChartsModule,
  ],
  providers: [...fromServices.services, ...fromGuards.guards],
})
export class HomeModule {}
