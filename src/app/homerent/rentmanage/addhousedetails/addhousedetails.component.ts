import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addhousedetails',
  templateUrl: './addhousedetails.component.html',
  styleUrls: ['./addhousedetails.component.scss']
})
export class AddhousedetailsComponent implements OnInit {
  records:any;
  constructor() { }

  ngOnInit(): void {

    this.records = [
      { name: 'Sobhanna 01', age: 20, gender: 'Male', rentAmount: 5000 },
      { name: 'Sobhanna 02', age: 25, gender: 'Male', rentAmount: 6000 },
      { name: 'Sobhanna 03', age: 22, gender: 'Female', rentAmount: 5500 },
      { name: 'Sobhanna 02', age: 25, gender: 'Male', rentAmount: 6000 },
      { name: 'Sobhanna 03', age: 22, gender: 'Female', rentAmount: 5500 },
      // Add more records as needed
    ];
  }

}
