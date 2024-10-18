import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomerentRoutingModule } from './homerent-routing.module';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { RentmanageComponent } from './rentmanage/rentmanage.component';
import { TripmanageComponent } from './tripmanage/tripmanage.component';
import { EventmanageComponent } from './eventmanage/eventmanage.component';


@NgModule({
  declarations: [
    UserDashbordComponent,
    RentmanageComponent,
    TripmanageComponent,
    EventmanageComponent,
  ],
  imports: [
    CommonModule,
    HomerentRoutingModule
  ]
})
export class HomerentModule { }
