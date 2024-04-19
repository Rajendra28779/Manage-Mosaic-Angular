import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { HomerentserviceService } from '../services/homerentservice.service';
declare let $: any;

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.scss']
})
export class HomedetailsComponent implements OnInit {
  showfield:any=false;
  user:any;
  homedetails:any=[];
  txtsearchDate:any;
  roomdetails:any=[];
  housedetails:any;
  gethomedetails: any;

  constructor(private homerentserv:HomerentserviceService) { }

  ngOnInit(): void {
    let user:any=sessionStorage.getItem('user');
    this.user=JSON.parse(user);
    this.gethomedetailslist();
  }

  addhome(){
    this.showfield=!this.showfield;
  }

  gethomedetailslist(){
    this.homerentserv.gethomedetails(this.user.userid).subscribe((data:any)=>{
      this.homedetails=data.record;
    },
    (error:any) => console.log(error)
    );
  }

  savedetails(){
    let house=$('#house').val();
    let location=$('#location').val();
    let room=$('#room').val();

    if (house==null || house== "" || house==undefined){
      this.swal("Info","Please Fill House Name !","info");
      return;
    }
    if (location==null || location== "" || location==undefined){
      this.swal("Info","Please Fill House location !","info");
      return;
    }
    if (room==null || room== "" || room==undefined){
      this.swal("Info","Please Fill No of Room !","info");
      return;
    }

    let object={
      homeName:house,
      homeLocation:location,
      noofroom:room,
      userid:this.user.userid
    }
    this.homerentserv.savehomedetails(object).subscribe((data:any) =>{
      if(data.status==200){
        this.swal("Success","Details Added Successfully!","success");
        $('#house').val('');
        $('#location').val('');
        $('#room').val('');
        this.gethomedetailslist();
      }else{
        this.swal("Error","Something Went Wrong!","error");
      }
    });
  }

  swal(title: any, text: any, icon: any) {
    Swal.fire({
      icon: icon,
      title: title,
      text: text
    });
  }

  edit(data:any){

  }

  delete(data:any){
    this.homerentserv.inactiveroomdetails(data.detailsid).subscribe((data:any)=>{
      if(data.status== 200){
        this.swal("Success","Details Deleted Successfully!","success");
        this.gethomedetailslist();
      }else{
        this.swal("Error","Something Went Wrong! Try After Sometime!","error");
      }
    },
    (error:any) => console.log(error)
    );
  }

  getroomdetails(data:any){
    this.housedetails=data.detailsid
    this.roomdetails=[];
    this.homerentserv.getroomdetails(this.housedetails,this.user.userid).subscribe((data:any)=>{
      this.roomdetails=data.record;
    },
    (error:any) => console.log(error)
    );
    if(this.roomdetails.length==0){
      let noofroom=data.noofroom;
      for(let i=0;i<noofroom;i++){
        let object={
          id:i+1,
          roomNo:"Room No "+(i+1),
          allotperson:'',
          roomrent:''
        }
        this.roomdetails.push(object);
      }
    }
  }

  getperson(id:any){
    for(let person of this.roomdetails){
      if(person.id==id){
       person.allotperson=$('#p'+id).val();
      }
    }
  }

  getrent(id:any){
    for(let rent of this.roomdetails){
      if(rent.id==id){
        rent.roomrent=$('#r'+id).val();
      }
    }
  }

  submitdetails(){
    let object={
      roomdetails:this.roomdetails,
      userid:this.user.userid,
      housedetails:this.housedetails
    }
    this.homerentserv.submitdetails(object).subscribe((data:any)=>{
      if(data.status== 200){
        this.swal("Success","Details Submitted Successfully!","success");
        this.gethomedetailslist();
      }else{
        this.swal("Error","Something Went Wrong! Try After Sometime!","error");
      }
    },
    (error:any) => console.log(error)
    );
  }

}
