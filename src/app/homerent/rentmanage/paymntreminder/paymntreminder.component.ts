import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paymntreminder',
  templateUrl: './paymntreminder.component.html',
  styleUrls: ['./paymntreminder.component.scss']
})
export class PaymntreminderComponent implements OnInit {
  records:any=[];
  houselist:any;
  txtsearchDate:any;

  constructor() { }

  ngOnInit(): void {
    this.records = [
      { name: 'Rajendra', age: 20, gender: 'Male', rentAmount: 5000 },
      { name: 'Suresh', age: 25, gender: 'Male', rentAmount: 6000 },
      { name: 'Meera', age: 22, gender: 'Female', rentAmount: 5500 },
      { name: 'Rajendra', age: 20, gender: 'Male', rentAmount: 5000 },
      { name: 'Suresh', age: 25, gender: 'Male', rentAmount: 6000 },
      { name: 'Meera', age: 22, gender: 'Female', rentAmount: 5500 }
      // Add more records as needed
    ];
  }

  onSearch(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    console.log('Search query:', input);
    // You can add logic here to handle the search query
  }



}
