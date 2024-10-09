import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroomComponent } from './addroom/addroom.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { HomerentComponent } from './homerent.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';

const routes: Routes =[{
  path: '', component: HomerentComponent, children: [
  { path: 'userdashboard', component:UserDashbordComponent  },
  { path: 'hosmedetails', component:HomedetailsComponent  },
  { path: 'roomalert', component:AddroomComponent  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomerentRoutingModule { }
