import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
  // { path: '', redirectTo: 'adminlogin', pathMatch: 'full' },
  // { path: 'adminlogin', component: AdminLoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
