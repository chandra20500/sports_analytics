import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@app/auth/guards';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: '',
    // canActivate: [AuthenticationGuard],/
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'roaster',
    // canActivate: [AuthenticationGuard],/
    loadChildren: () => import('./roaster/roaster.module').then((m) => m.RoasterModule),
  },
  {
    path: 'practice-plans',
    // canActivate: [AuthenticationGuard],/
    loadChildren: () => import('./practice-plans/practice-plans.module').then((m) => m.PracticePlansModule),
  },
  // Fallback when no prior route is matched
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
