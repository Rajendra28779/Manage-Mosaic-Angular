import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CommenService } from '../../services/commen.service';

@Component({
  selector: 'app-tenantdashbord',
  templateUrl: './tenantdashbord.component.html',
  styleUrls: ['./tenantdashbord.component.scss']
})
export class TenantdashbordComponent implements OnInit {
  user:any;
  houselist:any=[];
  roomlist:any=[];
  maintanceFor:any=[];

  constructor(private readonly commenserv:CommenService) { }

  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('user');
    this.user=JSON.parse(userdata);
    this.getmsthouseList();

    this.maintanceFor = [
      {maintainId: '1',maintainFor:'Room Maintenance'},
      {maintainId: '2',maintainFor:'Water Likage / Water related Issue'},
      {maintainId: '3',maintainFor:'Regarding Electriccity'},
      {maintainId: '4',maintainFor:'For Parking Issue'},
      {maintainId: '5',maintainFor:'Other'},

    ];
  }

  getmsthouseList(){
    this.commenserv.gethousemasterData(this.user?.userId).subscribe((data:any) => {
          if(data.status == 200){
            this.houselist = data.record;
          }else{
            Swal.fire("Error","HouseDetails Can't fetch!", "error");
          }
        },
        (error:any) => console.log(error));
  }
  onChangeHouse($event:any){
    let id=$event.target.value;
    this.commenserv.getroommasterData(this.user?.userId,id).subscribe((data:any) => {
      if(data.status == 200){
        this.roomlist = data.record;
      }else{
        Swal.fire("Error","HouseDetails Can't fetch!", "error");
      }
    },
    (error:any) => console.log(error));
  }

  requestmaintnance(){

  }

}
