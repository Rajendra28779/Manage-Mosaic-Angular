import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentmanageRoutingModule } from './rentmanage-routing.module';
import { AddroomComponent } from './addroom/addroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { FilterPipe } from 'src/app/filter.pipe';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { AddtenentComponent } from './addtenent/addtenent.component';
import { AddhousedetailsComponent } from './addhousedetails/addhousedetails.component';
import { PaymntreminderComponent } from './paymntreminder/paymntreminder.component';
import { FormsModule } from '@angular/forms';
import { CompliantdetailsComponent } from './compliantdetails/compliantdetails.component';
import { ReminderComponent } from './reminder/reminder.component';




@NgModule({
  declarations: [
    AddroomComponent,
    DashboardComponent,
    HomedetailsComponent,
    FilterPipe,
    SidebarComponent,
    AddtenentComponent,
    AddhousedetailsComponent,
    PaymntreminderComponent,
    CompliantdetailsComponent,
    ReminderComponent,
  ],
  imports: [
    CommonModule,
    RentmanageRoutingModule,
    FormsModule
  ]
})
export class RentmanageModule { }
