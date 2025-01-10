import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
declare let $: any;

@Component({
  selector: 'app-tripmanage',
  templateUrl: './tripmanage.component.html',
  styleUrls: ['./tripmanage.component.scss']
})
export class TripmanageComponent implements OnInit {
  user:any;
  landing:any=true;

  constructor(private location:Location) { }

  ngOnInit(): void {
    let user:any=sessionStorage.getItem("user");
    this.user=JSON.parse(user);

    if(this.user == null || this.user == undefined){
      this.landing = false;
    }else{
      this.landing = true;
    }

    setTimeout(() => {
      this.showswal();
    }, 5000); // 5000ms = 5 seconds
  }

  showswal(){
    $('#openswal').show();
  }

  closemodal(){
    $('#openswal').hide();
  }
  backhome(){
    this.location.back();
  }

}
