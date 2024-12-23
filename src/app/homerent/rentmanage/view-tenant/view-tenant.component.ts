import { Component, OnInit } from '@angular/core';
import { CommenService } from '../../services/commen.service';
import { TenentdetailsService } from '../../services/tenentdetails.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-tenant',
  templateUrl: './view-tenant.component.html',
  styleUrls: ['./view-tenant.component.scss']
})
export class ViewTenantComponent implements OnInit {
  txtsearchDate:any;
  tenantdetails:any=[];
  user:any;
  houselist:any=[];
  roomlist:any=[];
  houseId:any="";
  roomId:any="";
  gettenantdata:any;

  constructor(private readonly commenserv:CommenService,
    private readonly tenantserv:TenentdetailsService) { }

  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('user');
    this.user=JSON.parse(userdata);
    this.getmsthouseList();
    this.gettenantdetails();
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
      this.gettenantdetails();
    }

    onSearch(event: Event): void {
      const input = (event.target as HTMLInputElement).value;
      console.log('Search query:', input);
      // You can add logic here to handle the search query
    }

    gettenantdetails(){
      this.tenantserv.gettenantdetails(this.houseId,this.roomId,"").subscribe((data:any) => {
        if(data.status == 200){
          this.tenantdetails = data.record;
        }else{
          Swal.fire("Error","Tenant Details Can't fetch!", "error");
        }
      },
      (error:any) => console.log(error));
    }

    getdetails(item:any){
      this.gettenantdata=item;
    }

    downloadTenantDoc(docPath: any) {
      if (docPath) {
          const img = this.commenserv.downloadcommondoc(docPath);
          window.open(img, '_blank');
      } else {
          Swal.fire('Info', 'There is no file', 'info');
      }
    }

}
