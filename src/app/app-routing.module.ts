import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationGuard } from '@app/auth/guards';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'home',
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
  {
    path: 'dashboard',
    // canActivate: [AuthenticationGuard],/
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
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
