import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { ContentComponent } from './content/content.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { ApplicationComponent } from './application/application.component';
import { AddComponent } from './add/add.component';
import { AssesmentComponent } from './assesment/assesment.component';
import { ExamComponent } from './exam/exam.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginpageComponent,
    ForgotpasswordComponent,
    SignupComponent,
    OtpverifyComponent,
    ContentComponent,
    PagenotfoundComponent,
    UserDashbordComponent,
    AddComponent,
    AssesmentComponent,
    ExamComponent,
    // ApplicationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
