import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss']
})
export class UserDashbordComponent implements OnInit {
  user:any;

  constructor(private readonly router:Router) {
  }

  ngOnInit(): void {
    let user:any=sessionStorage.getItem("user");
    this.user=JSON.parse(user);
  }

  tenantpage(){
    if(this.user.phoneNo == null || this.user.phoneNo == undefined || this.user.phone == ""){
      this.router.navigate(['/rentmanage/homerentmanage/tenantdashbord']); 
    }else {
      
      $('#tenantmobile').show();
    }
  }

  closemodal(){
    $('#tenantmobile').hide();
  }

}
