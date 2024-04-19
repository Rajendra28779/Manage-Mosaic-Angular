import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomerentRoutingModule } from './homerent-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddroomComponent } from './addroom/addroom.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { FilterPipe } from '../filter.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    AddroomComponent,
    HomedetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    HomerentRoutingModule
  ]
})
export class HomerentModule { }
