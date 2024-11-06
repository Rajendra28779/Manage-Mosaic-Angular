import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashbord',
  templateUrl: './user-dashbord.component.html',
  styleUrls: ['./user-dashbord.component.scss']
})
export class UserDashbordComponent implements OnInit {
  totalRooms: number = 100;
  occupied: number = 40;
  advance: number = 0;
  vacancies: number = 60;
  paidrent:any=66;
  totalearn:any=99999999;
  yearhearn:any=67885;
  monthearn:any=16885;
  advbook:any=20;
  upcmgvncy:any=25;

  // Dynamic calculations
  occupiedPercentage: number=0;
  advancePercentage: number =0;
  vacanciesPercentage: number =0;

  constructor() {
    this.animateCircle();
  }

  ngOnInit(): void {
  }

  animateCircle() {
    // Animation logic can be added here if needed
    setTimeout(() => {
      this.occupiedPercentage = this.occupied>0? (this.occupied / this.totalRooms) * 100:0; // This can be updated dynamically
      this.advancePercentage = this.advance>0? (this.advance / this.totalRooms) * 100:0; // This can be updated dynamically
      this.vacanciesPercentage = this.vacancies>0? (this.vacancies / this.totalRooms) * 100:0; // This can be updated dynamically
    }, 500); // Delay for animation effect
  }

}
