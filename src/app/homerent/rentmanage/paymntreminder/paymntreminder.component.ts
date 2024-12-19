import { Component, OnInit } from '@angular/core';
import { CommenService } from '../../services/commen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paymntreminder',
  templateUrl: './paymntreminder.component.html',
  styleUrls: ['./paymntreminder.component.scss']
})
export class PaymntreminderComponent implements OnInit {
  records:any=[];
  txtsearchDate:any;
  msthouseList:any=[];
  user:any

  constructor(private commenserv:CommenService) { }

  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('user');
    this.user=JSON.parse(userdata);    
    this.records = [
      { name: 'Rajendra', room: 101, house: 'Sobhanna 01', rentAmount: 5000 },
      { name: 'Suresh', room: 302, house: 'Sobhanna 01', rentAmount: 6000 },
      { name: 'Meera', room: 104, house: 'Sobhanna 01', rentAmount: 5500 },
      { name: 'Sanjib', room: 204, house: 'Sobhanna 02', rentAmount: 5000 },
      { name: 'Raina', room: 101, house: 'Sobhanna 02', rentAmount: 6000 },
      { name: 'Dhoni', room: 102, house: 'Sobhanna 02', rentAmount: 5500 }
      // Add more records as needed
    ];

    this.getmsthouseList();
  }

  getmsthouseList(){
    this.commenserv.gethousemasterData(this.user?.userId).subscribe((data:any) => {
          if(data.status == 200){
            this.msthouseList = data.record;
          }else{
            Swal.fire("Error","HouseDetails Can't fetch!", "error");
          }
        },
        (error:any) => console.log(error));
  }

  onSearch(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    console.log('Search query:', input);
    // You can add logic here to handle the search query
  }



}
