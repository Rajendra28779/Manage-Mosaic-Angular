import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaptchaService } from '../services/captcha.service';
import { EncryptService } from '../services/encrypt.service';
import { GoogleloginService } from '../services/googlelogin.service';
import { LoginserviceService } from '../services/loginservice.service';
import Swal from 'sweetalert2';
import { CommenService } from '../userpanel/services/commen.service';
declare let $: any;
declare const gapi: any;

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  activeTab: any = 'password'; // Default tab
  toggletype = 'password';
  showpassword = false;
  user1:any
  show:any
  msg:any
  rslt:any;
  constructor(private readonly captchaService:CaptchaService,
    private readonly leginsrv:LoginserviceService,
    private readonly router:Router,private readonly route:ActivatedRoute,
    private readonly commserv:CommenService,
    private readonly enctserv:EncryptService,
    private readonly googleAuthService: GoogleloginService) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.activeTab = 'password';
    this.loadCaptcha();
    try{
      this.googleAuthService.renderButton('google-signin-btn');
    } catch (error){
      window.location.reload();
    }
  }

  private async loadCaptcha() {
    try {
      const captcha = await this.captchaService.getCaptcha();
      $('#loginCaptchaImg').html(captcha);
    } catch (error) {
      console.error('Failed to load CAPTCHA:', error);
    }
  }

  switchTab(tab: any) {
    this.activeTab = tab; // Switch active tab
    this.sentotp=false;
  }

  enableDisableBtn() {
    this.showpassword = !this.showpassword;
    if (this.toggletype === 'password') {
      this.toggletype = 'text';
    } else {
      this.toggletype = 'password';
    }
  }
  onLoggedIn(){
    let challange = $('#capt').val();
    let captcha = $('#loginCaptchaImg').html();
    let isValid: boolean;
    isValid = this.captchaService.validateCaptcha(challange, captcha);
    // alert(isValid)
    if(!isValid){
      this.swal("Error","InCorrect Captcha","error");
      return;
    }
    let username=$('#username').val();
    let password=$('#password').val();
    if (username==null || username== "" || username==undefined){
      this.swal("Error","Please Fill UserName","error");
      return;
    }
    if (password==null || password== "" || password==undefined){
      this.swal("Error","Please Fill Password","error");
        return;
    }
    username=this.enctserv.OnEncrypt(username);
    password=this.enctserv.OnEncrypt(password);
    this.leginsrv.login(username,password).subscribe((data:any)=>{
      this.rslt=data;
      if(this.rslt.status==200){
        sessionStorage.setItem('user', JSON.stringify(this.rslt.userdata));
        sessionStorage.setItem('token', this.rslt.token);
        this.router.navigate(['/rentmanage/userdashboard']);
      }else if(this.rslt.status==400){
        this.swal("Error",this.rslt.message,"error");
        return;
      }else{
        this.swal("Error","Something Went Wrong !","error");
        return;
      }
    });
  }
  captref(){
    let component = this;
    $('#loginCaptchaImg').html(this.captchaService.getCaptcha());
    $('#loginRefreshCaptcha').click(function () {
      $('#loginCaptchaImg').html(component.captchaService.getCaptcha());
    });
  }

  showMsg(){
    this.msg="Success"
    $('#msg').show();
    setTimeout(function(){
      $('#msg').hide();
    },3000);
  }


    swal(title: any, text: any, icon: any) {
      Swal.fire({
        icon: icon,
        title: title,
        text: text
      });
    }

    sentotp:boolean = false;
    attemptcount:any=5;
    sendotp(){
      let phoneno:any=$('#mobile').val();
      if(phoneno == "" || phoneno == undefined || phoneno == null){
        $('#mobile').focus();
        Swal.fire("Error","Please Enter your Mobile No. ","error");
        return;
      }

      let challange = $('#capt').val();
      let captcha = $('#loginCaptchaImg').html();
      let isValid: boolean;
      isValid = this.captchaService.validateCaptcha(challange, captcha);
      if(!isValid){
        this.swal("Error","InCorrect Captcha","error");
        return;
      }

      this.commserv.sendOTPforloginthroughno(phoneno).subscribe((data:any) =>{
        if(data.status == 200){
          this.sentotp=true;
        }else if(data.status == 404){
          Swal.fire("Error","User Not Found !","error");
        } else {
          Swal.fire("Error","Something Went Wrong ! OTP Can't Send ,Please Trye After Sometime . ","error");
        }
      });
    }

    verifyOTP(){
    let phoneno:any=$('#mobile').val();
    let otpval:any=$('#otpval').val();
    if(phoneno == "" || phoneno == undefined || phoneno == null){
      $('#mobileno').focus();
      Swal.fire("Error","Please Enter your Mobile No. ","error");
      return;
    }
    if(otpval == "" || otpval == undefined || otpval == null){
      $('#otpval').focus();
      Swal.fire("Error","Please Enter OTP ","error");
      return;
    }
    this.commserv.verifyOTPforloginthroughno(phoneno,otpval).subscribe((data:any) =>{
      if(data.status == 200){
        sessionStorage.setItem('user', JSON.stringify(data.record.userdata));
        sessionStorage.setItem('token', data.record.token);
        this.router.navigate(['/rentmanage/userdashboard']);
      }else if(data.status == 401){
        if(data.record == 0){
        Swal.fire("Error","Maximum verification attempts reached. Please try again later.","error");
          this. switchTab('otp');
        } else {
          Swal.fire("Error","Otp Not matched ! you have "+data.record+" attempts now","error");
          this.attemptcount=data.record;
        }
      } else {
        Swal.fire("Error","Something Went Wrong ! OTP Can't Verify ,Please Trye After Sometime . ","error");
      }
    });
  }
}
