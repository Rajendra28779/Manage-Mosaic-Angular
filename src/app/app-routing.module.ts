import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { AuthgardService } from '../app/services/authgard.service';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { UserDashbordComponent } from './userpanel/user-dashbord/user-dashbord.component';
import { TripmanageComponent } from './userpanel/tripmanage/tripmanage.component';
import { EventmanageComponent } from './userpanel/eventmanage/eventmanage.component';

const routes: Routes = [
  { path: '', component:UserDashbordComponent },
  { path: 'login', component:LoginpageComponent  },
  { path: 'signup', component:SignupComponent  },
  { path: 'contactus', component:ContactusComponent  },
  { path: 'unauthorize', component:UnauthorizeComponent  },
  { path: 'tripmanage', component:TripmanageComponent  },
  { path: 'eventmanage', component:EventmanageComponent  },

  { path: 'application', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) },
  { path: 'userpanel', loadChildren: () => import('./userpanel/userpanel.module').then(h => h.UserpanelModule),canActivate: [AuthgardService] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
