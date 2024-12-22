import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CompliantService } from '../../services/compliant.service';

@Component({
  selector: 'app-compliantdetails',
  templateUrl: './compliantdetails.component.html',
  styleUrls: ['./compliantdetails.component.scss']
})
export class CompliantdetailsComponent implements OnInit {
  txtsearchDate:any;
  tenantData:any = [];
  sumdata:any = [];

  constructor(private readonly compliantserv:CompliantService) { }

  ngOnInit(): void {
    this.getrequestdetailsForowner();
  }

  getrequestdetailsForowner(){
    this.compliantserv.getrequestdetailsForowner().subscribe((data:any) => {
          if(data.status == 200){
            this.tenantData = data.record.pendingList;
            this.sumdata = data.record.sumdata;
          }else{
            Swal.fire("Error","Something Went Wrong !", "error");
          }
        },
        (error:any) => console.log(error));
  }

  iconItem:any;
  actiontype:any;
  tekeAction(item:any){
    this.iconItem=item;
  }
  takeactiontime(){
    Swal.fire({
              title: 'Are you sure?',
              text: 'Your action directly affects the tenant, so please ensure that your action is correct.',
              icon: 'question',
              showCancelButton: true,
              confirmButtonText: 'Yes',
              cancelButtonText: 'No'
            }).then((result) => {
              if (result.isConfirmed) {
                this.compliantserv.takeactionagainestrequest(this.actiontype,this.iconItem.rqstId).subscribe((data:any) => {
                  if(data.status == 200){
                    Swal.fire("Success","Action Taken SuccessFully !", "success");
                    this.getrequestdetailsForowner();
                  }else if(data.status == 401){
                    Swal.fire("Success",data.message, "success");
                  }else{
                    Swal.fire("Error","Something Went Wrong !", "error");
                  }
                },
                (error:any) => {console.log(error);  Swal.fire("Error","Something Went Wrong !", "error");});
              }
            });    
  }
  action(item:any){
    this.actiontype=item;
  }
}
