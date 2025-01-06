import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.scss']
})
export class ReminderComponent implements OnInit {
  txtsearchDate:any

  connectfrommail:any = [
    { tenantName: 'John Doe',mobile: '1234567890', roomNo: 101, house: 'sobhanna', complaint: 'Water Leakage', time: new Date(), status: 0 },
    { tenantName: 'Jane Smith',mobile: '1234567890', roomNo: 102, house: 'sobhanna', complaint: 'Broken AC', time: new Date(), status: 2 },
    { tenantName: 'Michael Lee',mobile: '1234567890', roomNo: 103, house: 'sobhanna', complaint: 'No Hot Water', time: new Date(), status: 0 },
    // Add more data as needed
  ];

  bookroomData:any = [
    {roomDetails: 'Room 101',house: 'sobhanna',vacantFrom: '2024-10-20',alertStatus: 1},
    {roomDetails: 'Room 202',house: 'sobhanna',vacantFrom: '2024-11-01',alertStatus: 1},
    {roomDetails: 'Room 303',house: 'sobhanna',vacantFrom: '2024-10-25',alertStatus: 2},
    {roomDetails: 'Room 404',house: 'sobhanna',vacantFrom: '2024-12-01',alertStatus: 2},
    {roomDetails: 'Room 505',house: 'sobhanna',vacantFrom: '2024-11-15',alertStatus: 1}
  ];
  vacentroomData:any = [
    {roomDetails: 'Room 505',house: 'sobhanna',vacantFrom: '2024-11-15',alertStatus: 1},
    {roomDetails: 'Room 303',house: 'sobhanna',vacantFrom: '2024-10-25',alertStatus: 0},
    {roomDetails: 'Room 101',house: 'sobhanna',vacantFrom: '2024-10-20',alertStatus: 1},
    {roomDetails: 'Room 202',house: 'sobhanna',vacantFrom: '2024-11-01',alertStatus: 1},
    {roomDetails: 'Room 404',house: 'sobhanna',vacantFrom: '2024-12-01',alertStatus: 0}

  ];


  constructor() { }

  ngOnInit(): void {
  }

}
