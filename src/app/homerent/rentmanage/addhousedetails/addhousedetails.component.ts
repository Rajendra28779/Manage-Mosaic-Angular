import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomerentserviceService } from '../../services/homerentservice.service';

@Component({
  selector: 'app-addhousedetails',
  templateUrl: './addhousedetails.component.html',
  styleUrls: ['./addhousedetails.component.scss']
})
export class AddhousedetailsComponent implements OnInit {
  user:any;
  records:any=[];
  constructor(private route:Router,
    private homerentserv:HomerentserviceService) { }

  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('userdata');
    this.user=JSON.parse(userdata);
    this.getallhousedetialsforuserspecific();

    this.records = [
      { name: 'Sobhanna 01', age: 20, gender: 'Male', rentAmount: 5000,'id':1 },
      { name: 'Sobhanna 02', age: 25, gender: 'Male', rentAmount: 6000,'id':1  },
      { name: 'Sobhanna 03', age: 22, gender: 'Female', rentAmount: 5500,'id':1  },
      { name: 'Sobhanna 02', age: 25, gender: 'Male', rentAmount: 6000,'id':1  },
      { name: 'Sobhanna 03', age: 22, gender: 'Female', rentAmount: 5500,'id':1  },
      // Add more records as needed
    ];
  }
  getallhousedetialsforuserspecific() {
    this.homerentserv.getallhousedetialsforuserspecific(this.user?.userid).subscribe((data:any) => {
      if(data.status == 200){
        this.records = data.data;
      }else{
        Swal.fire("Error","Something went wrong !", "error");
      }
    },
    (error:any) => console.log(error));
  }

  housedetails(houseId:any){
    localStorage.setItem('houseId',houseId);
    this.route.navigate(['/rentmanage/homerentmanage/hosmedetails']);
  }

}
