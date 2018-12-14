import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../shared/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ],
  declarations: [ DashboardComponent ]
})
export class DashboardModule { }
