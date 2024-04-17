import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
declare let $: any;

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  user1:any;
  constructor(public route:ActivatedRoute) {
    // this.user1 = this.route.getCurrentNavigation().extras.state;
   }

  ngOnInit(): void {
    this.user1= this.route.snapshot.params['id']
    if(this.user1=="about"){
      // $('#about').hide();
    $('#service').hide();
    }else if(this.user1=="service"){
      $('#about').hide();
    // $('#service').hide();
    }else{
      // $('#about').hide();
    $('#service').hide();
    }
    // $('#home').show();
  }

}
