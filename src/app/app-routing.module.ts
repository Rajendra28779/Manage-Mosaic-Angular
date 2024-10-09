import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: '', component:LoginpageComponent, pathMatch: 'full' },
  { path: 'login', component:LoginpageComponent  },
  { path: 'login/:id', component:LoginpageComponent  },
  { path: 'signup', component:SignupComponent  },

  { path: 'application', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) },
  { path: 'rentmanage', loadChildren: () => import('./homerent/homerent.module').then(h => h.HomerentModule) },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
