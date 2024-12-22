import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
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
    let userdata:any=sessionStorage.getItem('user');
    this.user=JSON.parse(userdata);
    this.getallhousedetialsforuserspecific();
  }
  getallhousedetialsforuserspecific() {
    this.homerentserv.getallhousedetialsforuserspecific(this.user?.userId).subscribe((data:any) => {
      if(data.status == 200){
        this.records = data.record;
      }else{
        Swal.fire("Error","Something went wrong !", "error");
      }
    },
    (error:any) => console.log(error));
  }

  housedetails(houseId:any){
    let navigation:NavigationExtras ={
          state:{
            houseId:houseId
          }
        }
    this.route.navigate(['/rentmanage/homerentmanage/hosmedetails'],navigation);
  }

}
