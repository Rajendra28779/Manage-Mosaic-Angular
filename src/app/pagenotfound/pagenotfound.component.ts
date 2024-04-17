import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagenotfound',
  templateUrl: './pagenotfound.component.html',
  styleUrls: ['./pagenotfound.component.scss']
})
export class PagenotfoundComponent implements OnInit {

  constructor(public Route:Router) { }

  ngOnInit(): void {
  }
  logout() {
    sessionStorage.clear();
    this.Route.navigateByUrl('/login');
  }

}
