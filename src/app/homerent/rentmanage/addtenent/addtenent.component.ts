import { Component, OnInit } from '@angular/core';
import { CommenService } from '../../services/commen.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addtenent',
  templateUrl: './addtenent.component.html',
  styleUrls: ['./addtenent.component.scss']
})
export class AddtenentComponent implements OnInit {
  user:any;
  houselist:any=[];
  roomlist:any=[];
  fileName:any;

  constructor(private readonly commenserv:CommenService) { }

  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('user');
    this.user=JSON.parse(userdata);  
    this.getmsthouseList();
  }

  getmsthouseList(){
      this.commenserv.gethousemasterData(this.user?.userId).subscribe((data:any) => {
            if(data.status == 200){
              this.houselist = data.record;
            }else{
              Swal.fire("Error","HouseDetails Can't fetch!", "error");
            }
          },
          (error:any) => console.log(error));
    }
  onChangeHouse($event:any){
    let id=$event.target.value;
    this.commenserv.getroommasterData(this.user?.userId,id).subscribe((data:any) => {
      if(data.status == 200){
        this.roomlist = data.record;
      }else{
        Swal.fire("Error","HouseDetails Can't fetch!", "error");
      }
    },
    (error:any) => console.log(error));
  }
  

  handleFileInput(event:any,no:any){

  }

  submit(){

  }

  resetVal(){

  }

}
