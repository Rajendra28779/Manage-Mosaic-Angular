import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  totalRooms: number = 100;
  occupied: number = 50;
  advance: number = 20;
  vacancies: number = 30;
  paidrent:any=66;
  totalearn:any=99999999;
  yearhearn:any=67885;
  monthearn:any=16885;
  advbook:any=20;
  upcmgvncy:any=25;
  txtsearchDate:any;
  curyear:any;

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
    this.curyear=new Date().getFullYear();
    this.createSpecialitychart();
    this.createProcedurechart();
  }

  animateCircle() {
    // Animation logic can be added here if needed
    setTimeout(() => {
      this.occupiedPercentage = this.occupied>0? (this.occupied / this.totalRooms) * 100:0; // This can be updated dynamically
      this.advancePercentage = this.advance>0? (this.advance / this.totalRooms) * 100:0; // This can be updated dynamically
      this.vacanciesPercentage = this.vacancies>0? (this.vacancies / this.totalRooms) * 100:0; // This can be updated dynamically
    }, 500); // Delay for animation effect
  }


  private createSpecialitychart(): void {
    let date = new Date();
    const data: any[] = [];

    const chart = Highcharts.chart('speciality_chart' as any, {
        chart: {
            type: 'column'
        },
        title: {
            text: '', // Modified title
            align: 'left'
        },
        subtitle: {
            text:
                '',
            align: 'left'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
            crosshair: true,
            labels: {
                style: {
                    fontSize: '12px' // Set the font size here
                }
            },
            accessibility: {
                description: ''
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                showInLegend: false
            }
        },
        series: [
            {
                name: '',
                color: '#6FB3B8',
                data: [5000, 6545, 8885, 4521, 2852, 3652, 7822,9585 ,4582 ,4425,15827 ,11425]
            }
        ]
    } as any);
}

private createProcedurechart(): void {
    let date = new Date();
    const data: any[] = [];

    const chart = Highcharts.chart('procedure_chart' as any, {
        chart: {
            type: 'column'
        },
        title: {
            text: '', // Modified title
            align: 'left'
        },
        subtitle: {
            text:
                '',
            align: 'left'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
            crosshair: true,
            labels: {
                style: {
                    fontSize: '12px' // Set the font size here
                }
            },
            accessibility: {
                description: ''
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                showInLegend: false
            }
        },
        series: [
            {
                name: '',
                color: '#4AD991',
                data: [5000, 6545, 8885, 4521, 2852, 3652, 7822,9585 ,4582 ,4425,9582 ,8767]
            }
        ]
    } as any);
}

}
