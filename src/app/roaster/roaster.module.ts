import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { RoasterRoutingModule } from './roaster-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { ChartsModule } from 'ng2-charts';

import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import * as fromGuards from './guards';

@NgModule({
  declarations: [...fromContainers.containers, fromComponents.components],
  imports: [
    SharedModule,
    RoasterRoutingModule,
    MaterialModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    ChartsModule,
  ],
  providers: [...fromServices.services, ...fromGuards.guards],
})
export class RoasterModule {}
