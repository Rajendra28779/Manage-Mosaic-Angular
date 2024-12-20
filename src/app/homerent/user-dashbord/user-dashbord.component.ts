import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss']
})
export class UserDashbordComponent implements OnInit {
  user:any;

  constructor() {
  }

  ngOnInit(): void {
    let user:any=sessionStorage.getItem("user");
    this.user=JSON.parse(user);
  }

  redirecttorentmanage(){

  }

}
