import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { SignupComponent } from './signup/signup.component';
import { OtpverifyComponent } from './otpverify/otpverify.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddComponent } from './add/add.component';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { UnauthorizeComponent } from './unauthorize/unauthorize.component';
import { ErrorInterceptor } from './services/error.interceptor';
import { UserpanelComponent } from './userpanel/userpanel.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    ForgotpasswordComponent,
    SignupComponent,
    OtpverifyComponent,
    PagenotfoundComponent,
    AddComponent,
    HeaderComponent,
    FooterComponent,
    ContactusComponent,
    UnauthorizeComponent,
    UserpanelComponent,
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
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
