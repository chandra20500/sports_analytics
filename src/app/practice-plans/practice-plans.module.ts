import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { PracticePlansRoutingModule } from './practice-plans-routing.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { ChartsModule } from 'ng2-charts';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromServices from './services';
import * as fromGuards from './guards';

@NgModule({
  declarations: [...fromContainers.containers, fromComponents.components],
  imports: [
    SharedModule,
    PracticePlansRoutingModule,
    MaterialModule,
    ChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  providers: [...fromServices.services, ...fromGuards.guards],
})
export class PracticePlansModule {}
