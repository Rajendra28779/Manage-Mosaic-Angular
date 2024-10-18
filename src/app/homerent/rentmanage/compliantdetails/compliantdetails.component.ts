import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compliantdetails',
  templateUrl: './compliantdetails.component.html',
  styleUrls: ['./compliantdetails.component.scss']
})
export class CompliantdetailsComponent implements OnInit {
  txtsearchDate:any;
  tenantData:any = [
    { tenantName: 'John Doe',mobile: '1234567890', roomNo: 101, house: 'sobhanna', complaint: 'Water Leakage', time: new Date(), status: 0 },
    { tenantName: 'Jane Smith',mobile: '1234567890', roomNo: 102, house: 'sobhanna', complaint: 'Broken AC', time: new Date(), status: 2 },
    { tenantName: 'Michael Lee',mobile: '1234567890', roomNo: 103, house: 'sobhanna', complaint: 'No Hot Water', time: new Date(), status: 0 },
    // Add more data as needed
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
