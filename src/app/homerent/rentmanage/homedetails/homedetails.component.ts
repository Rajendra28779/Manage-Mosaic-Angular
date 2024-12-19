import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomerentserviceService } from '../../services/homerentservice.service';
declare let $: any;

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.scss']
})
export class HomedetailsComponent implements OnInit {
  roomlist:any=[1,2,3,4];
  addhouse:boolean=true;
  houseId:any="";
  user:any;
  displayhousedetails:any

  constructor(private homerentserv:HomerentserviceService,
    public route :Router) { }

  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('userdata');
    this.user=JSON.parse(userdata);
    this.houseId=localStorage.getItem('houseId');
    if(this.houseId==null || this.houseId== undefined ||this.houseId=="" || this.houseId==0){
      this.addhouse=true;
    }else{
      this.addhouse=false;
      this.getdisplayhousedetails(this.houseId,this.user.userid);
    }
  }
  getdisplayhousedetails(houseId: any, userid: any) {
    this.homerentserv.getdisplayhousedetails(houseId,userid).subscribe((data:any) => {
      if(data.status == 200){
        this.displayhousedetails = data.data;
      }else{
        Swal.fire("Error","HouseDetails Can't fetch!", "error");
      }
    },
    (error:any) => console.log(error));
  }

  submithousedetails(){
    let houseName =$('#housename').val();
    let totalFloor =$('#floors').val();
    let totalRoom =$('#rooms').val();
    let address =$('#address').val();

    let object={
      homeName:houseName,
      nooffloor:totalFloor,
      noofroom:totalRoom,
      homeLocation:address,
      userid:this.user?.userid
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to save these details?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.homerentserv.addnewhome(object).subscribe((result:any)=>{
          if(result.status == 200){
            Swal.fire('Saved!', 'Your details have been saved.','success');
            this.route.navigate(['/rentmanage/homerentmanage/housedetails']);
          }else{
            Swal.fire('Failed!', 'Failed to save your details. Please try again.', 'error');
          }

        },
          (error:any)=>console.log(error)
        );

      } else if (result.isDismissed) {
        Swal.fire('Cancelled', 'Your details have not been saved.', 'error');
      }
    });
  }

  handleFileInput(event:any, no:any){

  }
}
