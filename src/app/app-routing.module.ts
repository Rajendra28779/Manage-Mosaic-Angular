import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';
import { AuthgardService } from '../app/services/authgard.service';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component:LoginpageComponent  },
  { path: 'login/:id', component:LoginpageComponent  },
  { path: 'signup', component:SignupComponent  },
  { path: 'contactus', component:ContactusComponent  },
  { path: 'unauthorize', component:UnauthorizeComponent  },


  { path: 'application', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) },
  { path: 'userpanel', loadChildren: () => import('./userpanel/userpanel.module').then(h => h.UserpanelModule),canActivate: [AuthgardService] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
