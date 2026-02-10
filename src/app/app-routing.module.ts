import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AuthGuard } from './auth/auth-guard';

const routes: Routes = [
  {
    path: 'hub',
    canActivate: [AuthGuard],
    loadChildren: () => import('./views/views.module').then(m => m.ViewsModule)
  },
  { path: '**', component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule],
  providers: [{ provide: APP_BASE_HREF, useValue: '/gym' }]
})
export class AppRoutingModule { }
