import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomerentComponent } from './homerent.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';

const routes: Routes =[{
  path: '', component: HomerentComponent, children: [
  { path: 'userdashboard', component:UserDashbordComponent  },

  { path: 'homerentmanage', loadChildren: () => import('./rentmanage/rentmanage.module').then(h => h.RentmanageModule) },
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomerentRoutingModule { }
