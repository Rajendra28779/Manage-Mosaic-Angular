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

  constructor() { }

  ngOnInit(): void {
    let user:any=sessionStorage.getItem("user");
    this.user=JSON.parse(user);

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

}
