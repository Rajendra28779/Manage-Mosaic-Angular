import { NgModule } from '@angular/core';
import { EventManager } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { EventmanageComponent } from './eventmanage/eventmanage.component';
import { HomerentComponent } from './homerent.component';
import { TripmanageComponent } from './tripmanage/tripmanage.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';

const routes: Routes =[{
  path: '', component: HomerentComponent, children: [
  { path: 'userdashboard', component:UserDashbordComponent  },
  { path: 'tripmanage', component:TripmanageComponent  },
  { path: 'eventmanage', component:EventmanageComponent  },

  { path: 'homerentmanage', loadChildren: () => import('./rentmanage/rentmanage.module').then(h => h.RentmanageModule) },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomerentRoutingModule { }
