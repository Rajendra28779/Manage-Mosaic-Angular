import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorize',
  templateUrl: './unauthorize.component.html',
  styleUrls: ['./unauthorize.component.scss']
})
export class UnauthorizeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  logout() {
    sessionStorage.clear();
    this.route.navigateByUrl('/login');
  }


}
