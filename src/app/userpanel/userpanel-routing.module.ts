import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventmanageComponent } from './eventmanage/eventmanage.component';
import { TripmanageComponent } from './tripmanage/tripmanage.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { UserpanelComponent } from './userpanel.component';

const routes: Routes =[{
  path: '', component: UserpanelComponent, children: [
  { path: 'userdashboard', component:UserDashbordComponent  },
  { path: 'tripmanage', component:TripmanageComponent  },
  { path: 'eventmanage', component:EventmanageComponent  },

  { path: 'homerentmanage', loadChildren: () => import('./rentmanage/rentmanage.module').then(h => h.RentmanageModule) },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserpanelRoutingModule { }
