import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaptchaService } from '../services/captcha.service';
import { EncryptService } from '../services/encrypt.service';
import { GoogleloginService } from '../services/googlelogin.service';
import { LoginserviceService } from '../services/loginservice.service';
import Swal from 'sweetalert2';
declare let $: any;
declare const gapi: any;

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  activeTab: string = 'password'; // Default tab
  toggletype = 'password';
  showpassword = false;
  user1:any
  show:any
  msg:any
  rslt:any;
  constructor(private captchaService:CaptchaService,
    private leginsrv:LoginserviceService,
    private router:Router,private route:ActivatedRoute,
    private enctserv:EncryptService,
    private googleAuthService: GoogleloginService) { }

  ngOnInit(): void {
    sessionStorage.clear();
    this.googleAuthService.renderButton('google-signin-btn');
    this.user1= this.route.snapshot.params['id'];
    if(this.user1!=undefined){
      this.show=true
      this.showMsg();
    }
    let component = this;
    $('#loginCaptchaImg').html(this.captchaService.getCaptcha());
    $('#loginRefreshCaptcha').click(function () {
      $('#loginCaptchaImg').html(component.captchaService.getCaptcha());
    });
  }

  switchTab(tab: string): void {
    this.activeTab = tab; // Switch active tab
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
    // this.router.navigate(['/rentmanage/userdashboard']);
    // return;

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

  sendotp(){

  }

    swal(title: any, text: any, icon: any) {
      Swal.fire({
        icon: icon,
        title: title,
        text: text
      });
    }
}
