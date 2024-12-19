import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { LoginserviceService } from '../services/loginservice.service';
declare let $: any;

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss']
})
export class ContactusComponent implements OnInit {

  constructor(public mainserv:LoginserviceService) { }

  ngOnInit(): void {
  }

  swal(title:any, text:any, icon:any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text
    });
  }

  message:any="";
  onsubmit(){
    let name=$('#name').val();
    let mobile=$('#phone').val();
    let email=$('#email').val();
    let message=$('#message').val();

    if(name==null || name==undefined || name==""){
        this.message="Please enter Your Name ";
        $('#name').focus();
        return;
    }

    if(mobile==null || mobile==undefined || mobile==""){
      this.message="Please enter Your Mobile No ";
      $('#phone').focus();
      return;
    }

    if(email==null || email==undefined || email==""){
      this.message="Please enter Your Email Id ";
      $('#email').focus();
      return;
    }

    if(message==null || message==undefined || message==""){
      this.message="Please enter Message ";
      $('#message').focus();
      return;
    }

    let object ={
      name:name,
      email:email,
      phone:mobile,
      message:message
    }
    this.mainserv.sendmail(object).subscribe((data:any) => {
      this.swal('Success', data.message, 'success');
      this.reset();
    },(error:any)=>{
      this.swal('Oops !!', 'Something Wnnt Wrong', 'error');
    });
  }

  reset(){
      $('#name').val('');
      $('#phone').val('');
      $('#email').val('');
      $('#message').val('');
      this.message="";
  }

}
