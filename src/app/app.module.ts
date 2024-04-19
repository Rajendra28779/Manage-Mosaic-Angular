import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { UserDashbordComponent } from './user-dashbord/user-dashbord.component';
import { AddComponent } from './add/add.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { HomerentComponent } from './homerent/homerent.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ForgotpasswordComponent,
    SignupComponent,
    OtpverifyComponent,
    PagenotfoundComponent,
    UserDashbordComponent,
    AddComponent,
    FilterPipe,
    HomerentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
