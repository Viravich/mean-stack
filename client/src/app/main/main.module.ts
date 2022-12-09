import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [MainComponent, HomeComponent, HeaderComponent, TasksComponent],
  imports: [CommonModule, MainRoutingModule],
  providers: [],
  schemas: [],
})
export class MainModule {}
