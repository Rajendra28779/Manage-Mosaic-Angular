import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
  txtsearchDate:any;

  // Dynamic calculations
  occupiedPercentage: number=0;
  advancePercentage: number =0;
  vacanciesPercentage: number =0;

  users = [
    {
      fullName: 'John Doe',
      houseName: 'House A',
      roomName: 'Room 101',
      dueDate: '2024-11-10',
      dueAmount: 500,
      pendingAmount: 100,
      aadhaarNo: '1234-5678-9012',
      agreementStatus: 'Active',
      mobileNo: '9876543210'
    },
    {
      fullName: 'Jane Smith',
      houseName: 'House B',
      roomName: 'Room 203',
      dueDate: '2024-11-05',
      dueAmount: 450,
      pendingAmount: 50,
      aadhaarNo: '1234-5678-1234',
      agreementStatus: 'Expired',
      mobileNo: '9876543211'
    },
    {
      fullName: 'David Brown',
      houseName: 'House C',
      roomName: 'Room 305',
      dueDate: '2024-11-15',
      dueAmount: 600,
      pendingAmount: 200,
      aadhaarNo: '1234-5678-4321',
      agreementStatus: 'Active',
      mobileNo: '9876543212'
    },
    {
      fullName: 'David Brown',
      houseName: 'House C',
      roomName: 'Room 305',
      dueDate: '2024-11-15',
      dueAmount: 600,
      pendingAmount: 200,
      aadhaarNo: '1234-5678-4321',
      agreementStatus: 'Active',
      mobileNo: '9876543212'
    },
    {
      fullName: 'David Brown',
      houseName: 'House C',
      roomName: 'Room 305',
      dueDate: '2024-11-15',
      dueAmount: 600,
      pendingAmount: 200,
      aadhaarNo: '1234-5678-4321',
      agreementStatus: 'Active',
      mobileNo: '9876543212'
    },
    {
      fullName: 'David Brown',
      houseName: 'House C',
      roomName: 'Room 305',
      dueDate: '2024-11-15',
      dueAmount: 600,
      pendingAmount: 200,
      aadhaarNo: '1234-5678-4321',
      agreementStatus: 'Active',
      mobileNo: '9876543212'
    },
    {
      fullName: 'David Brown',
      houseName: 'House C',
      roomName: 'Room 305',
      dueDate: '2024-11-15',
      dueAmount: 600,
      pendingAmount: 200,
      aadhaarNo: '1234-5678-4321',
      agreementStatus: 'Active',
      mobileNo: '9876543212'
    },
    {
      fullName: 'David Brown',
      houseName: 'House C',
      roomName: 'Room 305',
      dueDate: '2024-11-15',
      dueAmount: 600,
      pendingAmount: 200,
      aadhaarNo: '1234-5678-4321',
      agreementStatus: 'Active',
      mobileNo: '9876543212'
    },
    {
      fullName: 'David Brown',
      houseName: 'House C',
      roomName: 'Room 305',
      dueDate: '2024-11-15',
      dueAmount: 600,
      pendingAmount: 200,
      aadhaarNo: '1234-5678-4321',
      agreementStatus: 'Active',
      mobileNo: '9876543212'
    },
    {
      fullName: 'David Brown',
      houseName: 'House C',
      roomName: 'Room 305',
      dueDate: '2024-11-15',
      dueAmount: 600,
      pendingAmount: 200,
      aadhaarNo: '1234-5678-4321',
      agreementStatus: 'Active',
      mobileNo: '9876543212'
    }
  ];


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
