import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.PracticePlansComponent,
  },
  {
    path: 'details',
    component: fromContainers.DetailedPracticePlansComponent,
  },
  {
    path: 'create',
    component: fromContainers.AddPracticePlansComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticePlansRoutingModule {}
