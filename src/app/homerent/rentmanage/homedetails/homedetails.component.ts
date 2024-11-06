import { Component, OnInit } from '@angular/core';
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

  constructor(private homerentserv:HomerentserviceService) { }

  ngOnInit(): void {
    this.houseId=localStorage.getItem('houseId');
    if(this.houseId==null || this.houseId== undefined ||this.houseId=="" || this.houseId==0){
      this.addhouse=true;
    }else{
      this.addhouse=false;
    }
  }

  handleFileInput(event:any, no:any){

  }
}
