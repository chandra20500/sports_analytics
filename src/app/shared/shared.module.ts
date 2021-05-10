import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ChartsModule } from 'ng2-charts';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import * as fromComponents from './components';
import * as fromPipes from './pipes';
import * as fromDirectives from './directives';

@NgModule({
  declarations: [...fromComponents.components, ...fromPipes.pipes, ...fromDirectives.directives],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule,
    ChartsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TranslateModule,
    ...fromComponents.components,
    ...fromDirectives.directives,
    ...fromPipes.pipes,
  ],
  providers: [],
})
export class SharedModule {}
