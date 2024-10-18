import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  notifications: any = [
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



  constructor(private router:Router,private location:Location) { }

  ngOnInit(): void {
    console.log("ok");

  }

  back(){
    this.location.back();
  }

  logout(){
    this.router.navigate(['/login']);
  }

  updateProfile(){

  }

  changePassword(){

  }

}
