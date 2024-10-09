import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss']
})
export class UserDashbordComponent implements OnInit {
  totalRooms: number = 100;
  occupied: number = 70;
  advance: number = 20;
  vacancies: number = 10;
  paidrent:any=66;
  totalearn:any=99999999;
  yearhearn:any=67885;
  monthearn:any=16885;
  advbook:any=20;
  upcmgvncy:any=25;

  // Dynamic calculations
  occupiedPercentage: number = (this.occupied / this.totalRooms) * 100;
  advancePercentage: number = (this.advance / this.totalRooms) * 100;
  vacanciesPercentage: number = (this.vacancies / this.totalRooms) * 100;

  constructor() {
    this.animateCircle();
  }

  ngOnInit(): void {
  }

  animateCircle() {
    // Animation logic can be added here if needed
    setTimeout(() => {
      this.occupiedPercentage = 70; // This can be updated dynamically
      this.advancePercentage = 20; // This can be updated dynamically
      this.vacanciesPercentage = 10; // This can be updated dynamically
    }, 500); // Delay for animation effect
  }

}
