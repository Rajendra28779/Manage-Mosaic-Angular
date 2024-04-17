import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }

  forward(item:any){

    // this.route.navigate(['about/'+item]);
    this.route.navigateByUrl('/login')
  }

  update(){

  }
}

