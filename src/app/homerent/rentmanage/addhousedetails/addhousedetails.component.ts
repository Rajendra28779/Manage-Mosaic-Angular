import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhousedetails',
  templateUrl: './addhousedetails.component.html',
  styleUrls: ['./addhousedetails.component.scss']
})
export class AddhousedetailsComponent implements OnInit {
  records:any;
  constructor(private route:Router) { }

  ngOnInit(): void {

    this.records = [
      { name: 'Sobhanna 01', age: 20, gender: 'Male', rentAmount: 5000,'id':1 },
      { name: 'Sobhanna 02', age: 25, gender: 'Male', rentAmount: 6000,'id':1  },
      { name: 'Sobhanna 03', age: 22, gender: 'Female', rentAmount: 5500,'id':1  },
      { name: 'Sobhanna 02', age: 25, gender: 'Male', rentAmount: 6000,'id':1  },
      { name: 'Sobhanna 03', age: 22, gender: 'Female', rentAmount: 5500,'id':1  },
      // Add more records as needed
    ];
  }

  housedetails(houseId:any){
    localStorage.setItem('houseId',houseId);
    this.route.navigate(['/rentmanage/homerentmanage/hosmedetails']);
  }

}
