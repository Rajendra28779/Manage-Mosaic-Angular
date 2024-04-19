import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginserviceService } from '../services/loginservice.service';
declare let $: any;

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
rslt:any
theswal:any;
gen:any;
user:any
  constructor(private leginsrv:LoginserviceService,private route:Router) { }

  ngOnInit(): void {
    $('#msg').hide();
    $('#msg1').hide();
  }
  check(no:any){
      this.gen=no;
  }

  signup(){
    $('#msg1').hide();
    let fname=$('#fname').val();
    let lname=$('#lname').val();
    let email=$('#email').val();
    let phone=$('#phone').val();
    let user=$('#user').val();
    let pass=$('#password').val();
    let cpass=$('#cpass').val();
    let address=$('#address').val();
    let gender=this.gen;
    if (fname==null || fname== "" || fname==undefined){
      this.theswal="Please Fill FirstName";
      $('#msg').show();
      return;
    }
    if (lname==null || lname== "" || lname==undefined){
      this.theswal="Please Fill LastName";
      $('#msg').show();
      return;
    }
    if (phone==null || phone== "" || phone==undefined){
      this.theswal="Please Fill PhoneNo";
      $('#msg').show();
      return;
    }
    if (email==null || email== "" || email==undefined){
      this.theswal="Please Fill Email";
      $('#msg').show();
      return;
    }
    if (user==null || user== "" || user==undefined){
      this.theswal="Please Fill UserName";
      $('#msg').show();
      return;
    }
    if (pass==null || pass== "" || pass==undefined){
      this.theswal="Please Fill Password";
      $('#msg').show();
      return;
    }
    if (cpass==null || cpass== "" || cpass==undefined){
      this.theswal="Please Fill confirm Password";
      $('#msg').show();
      return;
    }
    if (gender==null || gender== "" || gender==undefined){
      this.theswal="Please Select Gender";
      $('#msg').show();
      return;
    }

    if (address==null || address== "" || address==undefined){
      this.theswal="Please Enter Address";
      $('#msg').show();
      return;
    }

    if (pass!=cpass){
      this.theswal="Password And Confirm Password Should Be Same";
      $('#msg').show();
      return;
    }
    if(this.user.statuscode!=200){
      this.theswal=this.user.message;
      $('#msg').show();
    }

$('#msg').hide();
let object ={
  firstName:fname,
  userName:user,
  lastName:lname,
  mobileNo:phone,
  email:email,
  password:pass,
  gender:gender,
  address:address,
}
    this.leginsrv.signin(object).subscribe((data:any)=>{
        this.rslt=data;
        if(this.rslt.status==200){
          this.swal("Success","SignUp Successful","success")
          this.route.navigate(['/login']);
        }else if(this.rslt.status==406){
          this.swal("Error",this.rslt.message,"error")
        }else{
          this.swal("Error", "Something Went Wrong ! Please Try After Sometime !", 'error');
        }
    },
    (error) => console.log(error)
    );


  }

  checkusername(){
    let user=$('#user').val().toString().trim().toLowerCase();
    if (user==null || user== "" || user==undefined){
      this.theswal="Please Fill UserName";
      $('#msg').show();
      return;
    }
    this.leginsrv.checkusername(user).subscribe((data:any)=>{
      this.user=data;
      if(this.user.status==200){
        this.theswal=this.user.message;
      $('#msg1').show();
      $('#msg').hide();
      }else if(this.user.status==401){
        this.theswal=this.user.message;
        $('#msg').show();
        $('#msg1').hide();
      }else{
        this.swal("Error", "Something Went Wrong ! Please Try After Sometime !", 'info');
      }
    },
    (error) => console.log(error)
    );

  }

  swal(title: any, text: any, icon: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text
    });
  }

}
