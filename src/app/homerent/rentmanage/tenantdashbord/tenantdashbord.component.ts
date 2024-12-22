import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CompliantService } from '../../services/compliant.service';
import { CommenService } from '../../services/commen.service';
declare let $: any;

@Component({
  selector: 'app-tenantdashbord',
  templateUrl: './tenantdashbord.component.html',
  styleUrls: ['./tenantdashbord.component.scss']
})
export class TenantdashbordComponent implements OnInit {
  user:any;
  userhousedatalist:any=[];
  houselist:any=[];
  roomlist:any=[];
  maintanceFor:any=[];
  tenantData:any=[];
  tenantdatafrmroom:any;

  constructor(private readonly compliantserv:CompliantService,
    private readonly commserv:CommenService
  ) { }

  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('user');
    this.user=JSON.parse(userdata);
    this.gethousedetailsforuser();    

    this.maintanceFor = [
      {maintainId: '1',maintainFor:'Room Maintenance'},
      {maintainId: '2',maintainFor:'Water Likage / Water related Issue'},
      {maintainId: '3',maintainFor:'Regarding Electriccity'},
      {maintainId: '4',maintainFor:'For Parking Issue'},
      {maintainId: '5',maintainFor:'Other'},

    ];
  }

  activeElement: any = 1; // To track the active element
  setActive(element: any) {
    this.activeElement = element;
    if(element == 2){
      this.getmaintanceTrackingRecord();
    }
  }

  getmaintanceTrackingRecord(){
    this.compliantserv.getmaintanceTrackingRecord(this.user?.userId).subscribe((data:any) => {
      if(data.status == 200){
        this.tenantData=data.record;
      }else{
        Swal.fire("Error","Something Went Wrong !", "error");
      }      
    },
    (error:any) => console.log(error));
  }

  gethousedetailsforuser(){
    this.compliantserv.gethousedetailsforuser(this.user?.phoneNo).subscribe((data:any) => {
      if(data.status == 200){
        this.userhousedatalist=data.record;
        for(let element of this.userhousedatalist){
          let obj ={
            homeId:element.houseId,
            homeName:element.houseName
          }
          this.houselist.push(obj);
        }        
      }else{
        Swal.fire("Error","Something Went Wrong !", "error");
      }      
    },
    (error:any) => console.log(error));
  }
  
  onChangeHouse($event:any){
    let id=$event.target.value;
    this.commserv.getroommasterData(this.user?.userId,id).subscribe((data:any) => {
      if(data.status == 200){
        this.roomlist = data.record;
      }else{
        Swal.fire("Error","Something Went Wrong !", "error");
      }
    },
    (error:any) => console.log(error));
  }

  onChangeroom($event:any){
    let id=$event.target.value;
    let houseId=$('#house').val();
    this.compliantserv.onChangeroomgettenanrdata(id,houseId).subscribe((data:any) => {
      if(data.status == 200){
        this.tenantdatafrmroom = data.record;
      }else{
        Swal.fire("Error","Something Went Wrong !", "error");
      }
    },
    (error:any) => console.log(error));
  }

  requestmaintnance(){
    let house = $('#house').val();
    let room = $('#room').val();
    let requestid = $('#rqstrson').val();
    let description = $('#description').val();

    if (house==null || house== "" || house==undefined){
          Swal.fire("Error","Please Select House","error");
          $('#house').focus();
          return;
        }
    if (room==null || room== "" || room==undefined){
          Swal.fire("Error","Please Select Room","error");
          $('#room').focus();
          return;
        }
    if (requestid==null || requestid== "" || requestid==undefined){
          Swal.fire("Error","Please Select Request Reson","error");
          $('#rqstrson').focus();
          return;
        }
    if (description==null || description== "" || description==undefined){
          Swal.fire("Error","Please Enter Description","error");
          $('#description').focus();
          return;
        }

    let object = {
      houseId :house,
      roomId :room,
      tenantId :this.tenantdatafrmroom.tenantId,
      requestFor :requestid,
      requestDescription :description,
      applyBy : this.user.userId,
    }

    Swal.fire({
          title: 'Are you sure?',
          text: 'You want to Raise Request? ',
          icon: 'question',
          showCancelButton: true,
          confirmButtonText: 'Yes',
          cancelButtonText: 'No'
        }).then((result) => {
          if (result.isConfirmed) {
            this.compliantserv.savehousemaintancerwst(object).subscribe((data:any) => {
              if(data.status == 200){
                Swal.fire("Success","Data Saved SuccessFully !", "success");
              }else{
                Swal.fire("Error","Something Went Wrong !", "error");
              }
            },
            (error:any) => {console.log(error);  Swal.fire("Error","Something Went Wrong !", "error");});
          }
        });    
  }
  
}
