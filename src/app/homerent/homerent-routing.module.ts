import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroomComponent } from './addroom/addroom.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { HomerentComponent } from './homerent.component';

const routes: Routes =[{
  path: '', component: HomerentComponent, children: [
  { path: 'innerpage', component:DashboardComponent  },
  { path: 'hosmedetails', component:HomedetailsComponent  },
  { path: 'roomalert', component:AddroomComponent  },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomerentRoutingModule { }
