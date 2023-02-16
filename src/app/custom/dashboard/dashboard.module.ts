import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
      DashboardRoutingModule,
      RouterLink
  ]
})
export class DashboardModule {
}
