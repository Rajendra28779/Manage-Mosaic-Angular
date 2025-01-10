import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-eventmanage',
  templateUrl: './eventmanage.component.html',
  styleUrls: ['./eventmanage.component.scss']
})
export class EventmanageComponent implements OnInit {
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
