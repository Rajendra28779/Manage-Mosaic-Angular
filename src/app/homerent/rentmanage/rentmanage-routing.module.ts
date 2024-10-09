import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddroomComponent } from './addroom/addroom.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';

const routes: Routes = [
  { path: 'hosmedetails', component:HomedetailsComponent  },
  { path: 'roomalert', component:AddroomComponent  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentmanageRoutingModule { }
