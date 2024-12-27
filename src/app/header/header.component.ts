import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { CommenService } from '../homerent/services/commen.service';
import { CompliantService } from '../homerent/services/compliant.service';
import { EncryptService } from '../services/encrypt.service';
declare let $ : any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  notifications: any;
  user:any;
  userhousedatalist:any;

  constructor(private router:Router,private location:Location,
              private readonly commserv:CommenService,
              private readonly enctserv:EncryptService,
              private readonly compliantserv:CompliantService) { }

  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('user');
    this.user=JSON.parse(userdata);

    this.notifications = [
      { message: "You have a new message from John Doe.", status: "1" },
      { message: "Room 101 will be vacant starting from 2024-10-20.", status: "2" },
      { message: "Your booking for Room 202 has been confirmed.", status: "3" },
      { message: "Reminder: Your appointment is scheduled for 2024-10-25 at 10:00 AM.", status: "1" },
      { message: "You have received a new connection request from Jane Smith.", status: "1" },
      { message: "Your payment of $150 for Room 303 has been successfully processed.", status: "3" },
      { message: "Thank you for your feedback! We appreciate your input.", status: "4" },
      { message: "Your profile has been updated successfully.", status: "1" },
      { message: "Check out our latest offers on rooms and accommodations!", status: "3" },
      { message: "Scheduled maintenance will occur on 2024-11-01 from 2:00 AM to 4:00 AM. Please save your work.", status: "1" }
    ];
  }

  back(){
    this.location.back();
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

  updateProfile(){
    this.compliantserv.gethousedetailsforuser(this.user?.phoneNo).subscribe((data:any) => {
      if(data.status == 200){
        this.userhousedatalist=data.record;
      }else{
        Swal.fire("Error","Something Went Wrong !", "error");
      }
    },
    (error:any) => console.log(error));
  }

  closemodal(){
    $('#changepassword').hide();
    this.sentotp=false;
    $('#newpass').val('');
    $('#cnfpass').val('');
    $('#otpval').val('');
  }

  changePassword(){
    $('#changepassword').show();
  }

  sentotp:boolean = false;
  attemptcount:any=5;
  sendOTP(){
    let newpassword:any=$('#newpass').val();
    if(newpassword == "" || newpassword == undefined || newpassword == null){
      $('#newpass').focus();
      Swal.fire("Error","Please Enter New Password ","error");
      return;
    }
    let cnfpassword:any=$('#cnfpass').val();
    if(cnfpassword == "" || cnfpassword == undefined || cnfpassword == null){
      $('#mobileno').focus();
      Swal.fire("Error","Please Enter Comfirm Password ","error");
      return;
    }

    if(newpassword != cnfpassword){
      Swal.fire("Error","Your confirm password does not match the new password. Please check and try again.","error");
      return;
    }

    this.commserv.sendOTPforaddmobileno("").subscribe((data:any) =>{
      if(data.status == 200){
        this.sentotp=true;
      } else {
        Swal.fire("Error","Something Went Wrong ! OTP Can't Send ,Please Trye After Sometime . ","error");
      }
    });
  }

  verifyOTP(){
    let newpassword:any=$('#newpass').val();
    if(newpassword == "" || newpassword == undefined || newpassword == null){
      $('#newpass').focus();
      Swal.fire("Error","Please Enter New Password ","error");
      return;
    }
    let cnfpassword:any=$('#cnfpass').val();
    if(cnfpassword == "" || cnfpassword == undefined || cnfpassword == null){
      $('#mobileno').focus();
      Swal.fire("Error","Please Enter Comfirm Password ","error");
      return;
    }

    if(newpassword != cnfpassword){
      Swal.fire("Error","Your confirm password does not match the new password. Please check and try again.","error");
      return;
    }

    let otpval:any=$('#otpval').val();
    if(otpval == "" || otpval == undefined || otpval == null){
      $('#otpval').focus();
      Swal.fire("Error","Please Enter OTP ","error");
      return;
    }

    this.commserv.verifyOTPforchangepassword(this.enctserv.OnEncrypt(cnfpassword),otpval).subscribe((data:any) =>{
      if(data.status == 200){
        Swal.fire("Success","Password Updated Successfully","success");
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
