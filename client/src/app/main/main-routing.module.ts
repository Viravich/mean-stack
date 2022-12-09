import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'home', component: HomeComponent },
      // { path: 'leads', component: LeadsComponent },
      // { path: 'profile', component: ProfileComponent },
      // { path: 'settings', component: SettingsComponent },
      // { path: '', redirectTo: '', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
