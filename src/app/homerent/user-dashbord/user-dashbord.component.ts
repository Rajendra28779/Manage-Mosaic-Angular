import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommenService } from '../services/commen.service';
declare let $: any;

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss']
})
export class UserDashbordComponent implements OnInit {
  user:any;

  constructor(private readonly router:Router,private readonly commserv:CommenService) {
  }

  ngOnInit(): void {
    let user:any=sessionStorage.getItem("user");
    this.user=JSON.parse(user);
  }

  tenantpage(){
    if(this.user?.phoneNo == null || this.user?.phoneNo == undefined || this.user?.phone == ""){
      $('#tenantmobile').show();
    }else {
      this.router.navigate(['/rentmanage/homerentmanage/tenantdashbord']);
    }
  }

  closemodal(){
    $('#tenantmobile').hide();
    this.sentotp=false;
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
    this.commserv.sendOTPforaddmobileno(phoneno).subscribe((data:any) =>{
      if(data.status == 200){
        this.sentotp=true;
      } else {
        Swal.fire("Error","Something Went Wrong ! OTP Can't Send ,Please Trye After Sometime . ","error");
      }
    });
    this.sentotp=true;
  }

  verifyOTP(){
    let phoneno:any=$('#mobileno').val();
    let otpval:any=$('#otpval').val();
    if(otpval == "" || otpval == undefined || otpval == null){
      $('#otpval').focus();
      Swal.fire("Error","Please Enter OTP ","error");
      return;
    }
    this.commserv.verifyOTPforaddmobileno(phoneno,otpval).subscribe((data:any) =>{
      if(data.status == 200){
        Swal.fire("Error","Mobile No. Added Successfully","error");
        this.closemodal();
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
