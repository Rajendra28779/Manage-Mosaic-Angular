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
  }

  signup(){
    let fname=$('#fname').val();
    let lname=$('#lname').val();
    let email=$('#email').val();
    let phone=$('#phone').val();
    let user=$('#user').val();
    let pass=$('#password').val();
    let cpass=$('#cpass').val();

    if (fname==null || fname== "" || fname==undefined){
      this.theswal="Please Fill FirstName";
      this.swal("Error",this.theswal,"error");
      return;
    }
    if (lname==null || lname== "" || lname==undefined){
      this.theswal="Please Fill LastName";
      this.swal("Error",this.theswal,"error");
      return;
    }
    if (phone==null || phone== "" || phone==undefined){
      this.theswal="Please Fill PhoneNo";
      this.swal("Error",this.theswal,"error");
      return;
    }
    if (email==null || email== "" || email==undefined){
      this.theswal="Please Fill Email";
      this.swal("Error",this.theswal,"error");
      return;
    }
    if (pass==null || pass== "" || pass==undefined){
      this.theswal="Please Fill Password";
      this.swal("Error",this.theswal,"error");
      return;
    }
    if (cpass==null || cpass== "" || cpass==undefined){
      this.theswal="Please Fill confirm Password";
      this.swal("Error",this.theswal,"error");
      return;
    }

    if (pass!=cpass){
      this.theswal="Password And Confirm Password Should Be Same";
      this.swal("Error",this.theswal,"error");
      return;
    }

let object ={
  firstName:fname,
  userName:user,
  lastName:lname,
  mobileNo:phone,
  email:email,
  password:pass
}
    this.leginsrv.signin(object).subscribe((data:any)=>{
        this.rslt=data;
        if(data.status==200){
          this.swal("Success","SignUp Successful","success");
          // this.route.navigate(['/login']);
          sessionStorage.setItem('user', JSON.stringify(this.rslt.userdata));
          sessionStorage.setItem('token', JSON.stringify(this.rslt.token));
          this.route.navigate(['/rentmanage/userdashboard']);
        }else if(this.rslt.status==400){
          this.swal("Error",this.rslt.message,"error")
        }else{
          this.swal("Error", "Something Went Wrong ! Please Try After Sometime !", 'error');
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
