import { Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AuthGuard } from './auth/auth-guard';

export const routes: Routes = [
  {
    path: 'hub',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./views/views.routes').then((m) => m.VIEWS_ROUTES),
  },
  { path: '**', component: EmptyRouteComponent },
];
