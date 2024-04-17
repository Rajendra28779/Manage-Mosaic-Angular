import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssesmentComponent } from './assesment/assesment.component';
import { ContentComponent } from './content/content.component';
import { ExamComponent } from './exam/exam.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthgardService } from './services/authgard.service';
import { SignupComponent } from './signup/signup.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';

const routes: Routes = [
  { path: '', component:LandingPageComponent, pathMatch: 'full' },
  { path: 'landingpage', component:LandingPageComponent },
  { path: 'login', component:LoginpageComponent  },
  { path: 'login/:id', component:LoginpageComponent  },
  { path: 'signup', component:SignupComponent  },
  { path: 'about/:id', component:ContentComponent  },
  { path: 'service', component:ContentComponent  },
  { path: 'assesment', component:AssesmentComponent  },
  { path: 'exam', component:ExamComponent  },

  // { path: 'dashbord', component:UserDashbordComponent,children:
  //     [{path:"employee",component:ContentComponent}
  // ]},
  { path: 'application', loadChildren: () => import('./application/application.module').then(m => m.ApplicationModule) },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
