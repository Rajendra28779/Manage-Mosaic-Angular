import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CaptchaService } from '../services/captcha.service';
import { LoginserviceService } from '../services/loginservice.service';
declare let $: any;

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {
  toggletype = 'password';
  showpassword = false;
  user1:any
  show:any
  msg:any
  rslt:any;
  constructor(private captchaService:CaptchaService,private leginsrv:LoginserviceService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user1= this.route.snapshot.params['id']
    $('#msg').hide();
    $('#msg1').hide();
    if(this.user1!=undefined){
      // alert(this.user1)
      this.show=true
      this.showMsg();
    }
    var component = this;
    $('#loginCaptchaImg').html(this.captchaService.getCaptcha());
    $('#loginRefreshCaptcha').click(function () {
      $('#loginCaptchaImg').html(component.captchaService.getCaptcha());
    });


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
      this.msg="InCorrect Captcha"
      $('#msg1').show();
      return;
    }
    $('#msg1').hide();
    let username=$('#username').val();
    let password=$('#password').val();
    if (username==null || username== "" || username==undefined){
      this.msg="Please Fill UserName";
      $('#msg1').show();
      return;
    }
    if (password==null || password== "" || password==undefined){
      this.msg="Please Fill Password";
      $('#msg1').show();
      return;
    }
    $('#msg1').hide();
    this.leginsrv.signin(username,password).subscribe((data:any)=>{
        console.log(data);
      this.rslt=data;
      if(this.rslt.status==200){
        sessionStorage.setItem('user', JSON.stringify(this.rslt.data));
        this.msg=this.rslt.message;
        $('#msg1').show();
      }else if(this.rslt.status==404){
        this.msg=this.rslt.message;
        $('#msg1').show();
      }else if(this.rslt.status==400){
        this.msg=this.rslt.message;
        $('#msg1').show();
      }else{
        this.msg="Somethig Went Wrong";
        $('#msg1').show();
      }
    },
    (error:any) => console.log(error)
    );
  }
  captref(){
    var component = this;
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




google(){
  // @ts-ignore
google.accounts.id.initialize({
  client_id: "rajendraprasadsahoo@gmail.com",
  callback: this.handleCredentialResponse.bind(this),
  auto_select: false,
  cancel_on_tap_outside: true,

});
// @ts-ignore
google.accounts.id.renderButton(
// @ts-ignore
document.getElementById("google-button"),
  { theme: "outline", size: "large", width: "100%" }
);
// @ts-ignore
google.accounts.id.prompt((notification: PromptMomentNotification) => {});

}
async handleCredentialResponse(response: any) {
  // Here will be your response from Google.
  console.log(response);
}

}
