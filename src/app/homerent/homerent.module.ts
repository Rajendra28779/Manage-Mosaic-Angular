import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomerentRoutingModule } from './homerent-routing.module';
import { FilterPipe } from '../filter.pipe';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { RentmanageComponent } from './rentmanage/rentmanage.component';


@NgModule({
  declarations: [
    FilterPipe,
    UserDashbordComponent,
    RentmanageComponent,
  ],
  imports: [
    CommonModule,
    HomerentRoutingModule
  ]
})
export class HomerentModule { }
