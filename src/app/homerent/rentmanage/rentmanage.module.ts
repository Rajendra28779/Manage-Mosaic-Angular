import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentmanageRoutingModule } from './rentmanage-routing.module';
import { AddroomComponent } from './addroom/addroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { FilterPipe } from 'src/app/filter.pipe';


@NgModule({
  declarations: [
    AddroomComponent,
    DashboardComponent,
    HomedetailsComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    RentmanageRoutingModule
  ]
})
export class RentmanageModule { }
