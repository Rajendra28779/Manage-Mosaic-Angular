import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addtenent',
  templateUrl: './addtenent.component.html',
  styleUrls: ['./addtenent.component.scss']
})
export class AddtenentComponent implements OnInit {
  houselist:any=[];
  roomlist:any=[];
  fileName:any;

  constructor() { }

  ngOnInit(): void {
  }

  handleFileInput(event:any,no:any){

  }

  submit(){

  }

  resetVal(){

  }

}
