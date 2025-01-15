import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommenService } from '../services/commen.service';
import { EncryptService } from 'src/app/services/encrypt.service';
import { GoogleloginService } from 'src/app/services/googlelogin.service';
import { GeonamesService } from 'src/app/services/geonames.service';
declare let $: any;

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss']
})
export class UserDashbordComponent implements OnInit {
  user:any;
  mobileformat = /[6-9][0-9]{9}$/;
  cities:any=[];
  keyword = 'name';
  testimonials = [
    { text: "Great implementation! The dynamic star rendering approach is clean and effective. It ensures flexibility and handles undefined values gracefully. Keep up the excellent work!", author: "John Doe" ,star : 4 },
    { text: "Smart solution! Leveraging array constructors for iteration is a clever approach. It keeps the template concise and adaptable. Excellent coding practices here!", author: "Rajendra Prsasad Sahoo" ,star : 5},
    { text: "Good job! Your implementation is efficient and ensures the UI remains consistent even with undefined or zero values. Great attention to detail!", author: "Michael Johnson" ,star : 4 },
    { text: "Well-executed! The dynamic array generation is intuitive and clean. It's a great example of how to handle conditional rendering in Angular templates effectively.", author: "Emily Davis" , star : 5 },
    { text: "Fantastic approach! This solution balances simplicity and functionality, ensuring the code is both readable and robust. A solid implementation all around!", author: "Daniel Lee" , star : 5 }
  ];
  currentSlide = 0;
  landing:any=true;

  constructor(private readonly router:Router,
    private readonly googleAuthService: GoogleloginService,
              private readonly commserv:CommenService,
              private readonly enctserv:EncryptService,
              private geonamesService: GeonamesService) {}

  ngOnInit(): void {
    let user:any=sessionStorage.getItem("user");
    this.user=JSON.parse(user);
    this.geonamesService.getCitiesInIndia().subscribe(
      (data) => {
        this.cities = data.elements;
        console.log('Cities:', this.cities);
      },
      (error) => {
        console.error('Error fetching cities:', error);
      }
    );
    if(this.user == null || this.user == undefined){
      this.landing = false;
    }else{
      this.landing = true;
    }
    setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  selectEvent(item:any){
console.log(item);

  }

  onReset(){

  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.testimonials.length;
  }

  tenantpage(){
    let user:any=sessionStorage.getItem("user");
    this.user=JSON.parse(user);
    if(this.user?.phoneNo == null || this.user?.phoneNo == undefined || this.user?.phoneNo == ""){
      $('#tenantmobile').show();
    }else {
      this.router.navigate(['/userpanel/homerentmanage/tenantdashbord']);
    }
  }

  closemodal(){
    $('#tenantmobile').hide();
    $('#redirectpage').hide();
    $('#loginmodal').hide();
    this.sentotp=false;
    $('#mobileno').val('');
    $('#otpval').val('');
  }

  sentotp:boolean = false;
  attemptcount:any=5;
  sendOTP(){
    let phoneno:any=$('#mobileno').val();
    if(phoneno == "" || phoneno == undefined || phoneno == null){
      $('#mobileno').focus();
      Swal.fire("Error","Please Enter your Mobile No. ","error");
      return;
    }
    if (!(phoneno.toString()).match(this.mobileformat)) {
      $('#mobileno').focus();
      Swal.fire("Error","Please provide Valid MobileNo. ","error");
      return;
    }
    this.commserv.sendOTPforaddmobileno(phoneno).subscribe((data:any) =>{
      if(data.status == 200){
        this.sentotp=true;
      } else {
        Swal.fire("Error","Something Went Wrong ! OTP Can't Send ,Please Trye After Sometime . ","error");
      }
    });
  }

  verifyOTP(){
    let phoneno:any=$('#mobileno').val();
    let otpval:any=$('#otpval').val();
    if(phoneno == "" || phoneno == undefined || phoneno == null){
      $('#mobileno').focus();
      Swal.fire("Error","Please Enter your Mobile No. ","error");
      return;
    }
    if (!(phoneno.toString()).match(this.mobileformat)) {
      $('#mobileno').focus();
      Swal.fire("Error","Please provide Valid MobileNo. ","error");
      return;
    }
    if(otpval == "" || otpval == undefined || otpval == null){
      $('#otpval').focus();
      Swal.fire("Error","Please Enter OTP ","error");
      return;
    }
    this.commserv.verifyOTPforaddmobileno(this.enctserv.OnEncrypt(phoneno),otpval).subscribe((data:any) =>{
      if(data.status == 200){
        Swal.fire("Success","Mobile No. Added Successfully","success");
        this.closemodal();
        sessionStorage.removeItem('user');
        sessionStorage.setItem('user', JSON.stringify(data.record));
      }else if(data.status == 401){
        if(data.record == 0){
        Swal.fire("Error","Maximum verification attempts reached. Please try again later.","error");
          this.closemodal();
        } else {
          Swal.fire("Error","Otp Not matched ! you have "+data.record+" attempts now","error");
          this.attemptcount=data.record;
        }
      } else {
        Swal.fire("Error","Something Went Wrong ! OTP Can't Verify ,Please Trye After Sometime . ","error");
      }
    });
  }

  checkpage(no:any){
    if(this.landing){
      if(no == 1){
        $('#redirectpage').show();
      }else if(no == 2){
        this.router.navigate(['/userpanel/tripmanage']);
      }else if(no == 3){
        this.router.navigate(['/userpanel/eventmanage']);
      }
    }else{
      if(no == 1){
        this.googleAuthService.renderButton('google-signin-btn');
        $('#loginmodal').show();
      }else if(no == 2){
        this.router.navigate(['/tripmanage']);
      }else if(no == 3){
        this.router.navigate(['/eventmanage']);
      }
    }
  }


}
