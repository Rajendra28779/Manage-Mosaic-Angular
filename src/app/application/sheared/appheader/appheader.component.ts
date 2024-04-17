import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appheader',
  templateUrl: './appheader.component.html',
  styleUrls: ['./appheader.component.scss']
})
export class AppheaderComponent implements OnInit {
  userName:any="Rajendra"
  pagetitle:any="Dashbord"
  toggleLayoutBtn: boolean = false;
  constructor() { }

  ngOnInit(): void {
    

  }

  profile(){

  }

  logout(){

  }

  toggScreen() {
    //if (this.eRef.nativeElement.contains(event.target)) {
      if (localStorage.getItem('layoutType') === '') {
        this.setLayout('toggle-layout');
        this.toggleLayoutBtn = true;
      }
      else {
        this.setLayout('');
        this.toggleLayoutBtn = false;
      }

  }
  setLayout(layoutToggle: any) {
    localStorage.setItem('layoutType', layoutToggle);
    document.body.className = layoutToggle;
  }

}
