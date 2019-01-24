import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '../../shared/material.module';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    NgxChartsModule
  ],
  declarations: [ DashboardComponent, ChartsComponent ]
})
export class DashboardModule { }
