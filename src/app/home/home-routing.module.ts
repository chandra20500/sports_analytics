import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as fromContainers from './containers';

const routes: Routes = [
  {
    path: 'home',
    component: fromContainers.HomeComponent,
    children: [
      /*{
        path: 'about',
        loadChildren: () => import('../about/about.module').then((m) => m.AboutModule),
      },*/
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'about',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
