import { Component, OnInit } from '@angular/core';
import { CommenService } from '../../services/commen.service';
import Swal from 'sweetalert2';
import { HomerentserviceService } from '../../services/homerentservice.service';
import { TenentdetailsService } from '../../services/tenentdetails.service';
declare let $: any;

@Component({
  selector: 'app-paymntreminder',
  templateUrl: './paymntreminder.component.html',
  styleUrls: ['./paymntreminder.component.scss']
})
export class PaymntreminderComponent implements OnInit {
  listOfpayment:any=[];
  txtsearchDate:any;
  msthouseList:any=[];
  user:any
  houseId:any="";
  gettenantdata:any;
  


  constructor(private readonly commenserv:CommenService,
    private readonly homerentserv:HomerentserviceService,
    private readonly tenantserv:TenentdetailsService) { }
  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('user');
    this.user=JSON.parse(userdata); 
    this.getmsthouseList();
    this.gettenantlistforpaymentprocess();
  }

  getmsthouseList(){
    this.commenserv.gethousemasterData(this.user?.userId).subscribe((data:any) => {
          if(data.status == 200){
            this.msthouseList = data.record;
          }else{
            Swal.fire("Error","HouseDetails Can't fetch!", "error");
          }
        },
        (error:any) => console.log(error));
  }

  gettenantlistforpaymentprocess(){
    this.homerentserv.gettenantlistforpaymentprocess(this.houseId).subscribe((data:any) => {
      if(data.status == 200){
        this.listOfpayment = data.record;
      }else{
        Swal.fire("Error","Something Went Wrong!", "error");
      }
    },
    (error:any) =>{
      Swal.fire("Error","Something Went Wrong!", "error");
      console.log(error)
    });
  }

  onSearch(event: Event): void {
    const input = (event.target as HTMLInputElement).value;
    console.log('Search query:', input);
    // You can add logic here to handle the search query
  }

  gettenantdetails(tenanatid:any){
    this.tenantserv.gettenantdetails("","",tenanatid).subscribe((data:any) => {
      if(data.status == 200){
        this.gettenantdata = data.record[0];
      }else{
        Swal.fire("Error","Tenant Details Can't fetch!", "error");
      }
    },
    (error:any) => console.log(error));
  }

  downloadTenantDoc(docPath: any) {
    if (docPath) {
        const img = this.commenserv.downloadcommondoc(docPath);
        window.open(img, '_blank');
    } else {
        Swal.fire('Info', 'There is no file', 'info');
    }
  }

  totalpayment:any;
  tenantdata:any;
  currentbill:any=0;
  calculatepayment(item:any){
    this.tenantdata = item;
    this.totalpayment = parseInt(item.rentAmount) + parseInt(item.prvPendingAmount);
  }

  currentbillcount(){
    let prvbillno = this.tenantdata.prvMtrRead;
    let cullbillno = $('#cullbillno').val();
    let price = $('#price').val();
    let calculate = (parseInt(cullbillno)-parseInt(prvbillno))*price;
    if(price > 0){
      this.currentbill=calculate;
      this.totalpayment=parseInt(this.tenantdata.rentAmount) + parseInt(this.tenantdata.prvPendingAmount)+calculate;
    }else{
      this.currentbill=0;
    }

  }

}
