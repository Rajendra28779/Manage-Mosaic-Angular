import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomerentRoutingModule } from './homerent-routing.module';
import { AddroomComponent } from './addroom/addroom.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { FilterPipe } from '../filter.pipe';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';


@NgModule({
  declarations: [
    AddroomComponent,
    HomedetailsComponent,
    FilterPipe,
    UserDashbordComponent,
  ],
  imports: [
    CommonModule,
    HomerentRoutingModule
  ]
})
export class HomerentModule { }
