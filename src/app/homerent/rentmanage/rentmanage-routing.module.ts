import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddhousedetailsComponent } from './addhousedetails/addhousedetails.component';
import { AddroomComponent } from './addroom/addroom.component';
import { AddtenentComponent } from './addtenent/addtenent.component';
import { CompliantdetailsComponent } from './compliantdetails/compliantdetails.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomedetailsComponent } from './homedetails/homedetails.component';
import { PaymntreminderComponent } from './paymntreminder/paymntreminder.component';
import { ReminderComponent } from './reminder/reminder.component';
import { TenantdashbordComponent } from './tenantdashbord/tenantdashbord.component';
import { ViewTenantComponent } from './view-tenant/view-tenant.component';

const routes: Routes = [
  { path: 'dashboard', component:DashboardComponent  },
  { path: 'hosmedetails', component:HomedetailsComponent  },
  { path: 'roomalert', component:AddroomComponent  },
  { path: 'addtenent', component:AddtenentComponent  },
  { path: 'viewtenent', component:ViewTenantComponent },
  { path: 'upcommingpayment', component:PaymntreminderComponent  },
  { path: 'housedetails', component:AddhousedetailsComponent  },
  { path: 'housedetails', component:AddhousedetailsComponent  },
  { path: 'compliants', component:CompliantdetailsComponent  },
  { path: 'reminder', component:ReminderComponent  },
  { path: 'tenantdashbord', component:TenantdashbordComponent  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentmanageRoutingModule { }
