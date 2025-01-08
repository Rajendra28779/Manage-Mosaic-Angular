import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommenService } from '../services/commen.service';
import { EncryptService } from 'src/app/services/encrypt.service';
declare let $: any;

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss']
})
export class UserDashbordComponent implements OnInit {
  user:any;
  mobileformat = /[6-9][0-9]{9}$/;
  testimonials = [
    { text: "Testimonial 1", author: "John Doe" },
    { text: "Testimonial 2", author: "Jane Smith" },
    { text: "Testimonial 3", author: "Michael Johnson" },
    { text: "Testimonial 4", author: "Emily Davis" },
    { text: "Testimonial 5", author: "Daniel Lee" }
  ];
  currentSlide = 0;

  constructor(private readonly router:Router,
              private readonly commserv:CommenService,
              private readonly enctserv:EncryptService) {}

  ngOnInit(): void {
    let user:any=sessionStorage.getItem("user");
    this.user=JSON.parse(user);
    setInterval(() => {
      this.nextSlide();
    }, 5000);
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

}
