import { Component, OnInit } from '@angular/core';
import { CommenService } from '../../services/commen.service';
import Swal from 'sweetalert2';
import { TenentdetailsService } from '../../services/tenentdetails.service';
declare let $: any;

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
  aadharDoc:any="";
  rentDoc:any="";
  otherDoc:any="";

  constructor(private readonly commenserv:CommenService,private tenantserv:TenentdetailsService) { }

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
    let image = event.target.files[0];
    if (image != null || image != undefined) {
      let extension = image.name.split('.').pop();
      let allowedExtensions = /^(pdf|jpg|jpeg)$/i;
      if (!allowedExtensions.exec(extension)){
        Swal.fire("Warning", "Only .pdf, .jpg, .jpeg File Are Allowed!","warning");
        $('#image' + no).val('');
        return;
      }else{
        image = event.target.files[0];
        if(no ==1){
          this.aadharDoc = image;
        }else if(no ==2){
          this.rentDoc = image;
        }else if(no ==3){
          this.otherDoc = image;
        }
      }
    }else{
      Swal.fire("Warning", "Please Select File","warning");
    }
  }

  submit(){
    let tenantName = $('#fullname').val();
    let age = $('#age').val();
    let mobileno = $('#mobile').val();
    let altmobileno = $('#alternate').val();
    let member = $('#member').val();
    let membermobileno = $('#othmobile').val();
    let houseId = $('#house').val();
    let roomid = $('#room').val();
    let rentamount = $('#rent').val();
    let advanceamount = $('#adv').val();
    let efectivedate = $('#date').val();

    if (tenantName==null || tenantName== "" || tenantName==undefined){
      Swal.fire("Error","Please Enter Tenant Name","error");
      $('#fullname').focus();
      return;
    }

    if (age==null || age== "" || age==undefined){
      Swal.fire("Error","Please Enter Tenant Age","error");
      $('#age').focus();
      return;
    }

    if (mobileno==null || mobileno== "" || mobileno==undefined){
      Swal.fire("Error","Please Enter Your Tenant Mobile No","error");
      $('#mobile').focus();
      return;
    }

    if (member==null || member== "" || member==undefined){
      Swal.fire("Error","Please Enter No Of Member","error");
      $('#member').focus();
      return;
    }

    if (houseId==null || houseId== "" || houseId==undefined){
      Swal.fire("Error","Please Select House Name","error");
      $('#house').focus();
      return;
    }

    if (roomid==null || roomid== "" || roomid==undefined){
      Swal.fire("Error","Please Enter Room Name","error");
      $('#room').focus();
      return;
    }

    if (rentamount==null || rentamount== "" || rentamount==undefined){
      Swal.fire("Error","Please Enter Rent Amount","error");
      $('#rent').focus();
      return;
    }

    if (rentamount==0){
      Swal.fire("Error","Please Enter Rent Amount Should Not 0","error");
      $('#rent').val('');
      $('#rent').focus();
      return;
    }

    if (advanceamount==null || advanceamount== "" || advanceamount==undefined){
      Swal.fire("Error","Please Enter Your House Name","error");
      $('#adv').focus();
      return;
    }

    if (advanceamount==0){
      Swal.fire("Error","Please Enter Rent Amount Should Not 0","error");
      $('#adv').val('');
      $('#adv').focus();
      return;
    }

    if (efectivedate==null || efectivedate== "" || efectivedate==undefined){
      Swal.fire("Error","Please Enter Date When Tenant take Over The Romm","error");
      $('#date').focus();
      return;
    }

    if (efectivedate==null || efectivedate== "" || efectivedate==undefined){
      Swal.fire("Error","Please Enter Date When Tenant take Over The Romm","error");
      $('#date').focus();
      return;
    }

    if (efectivedate==null || efectivedate== "" || efectivedate==undefined){
      Swal.fire("Error","Please Enter Date When Tenant take Over The Romm","error");
      $('#date').focus();
      return;
    }

    if (this.aadharDoc==null || this.aadharDoc== "" || this.aadharDoc==undefined){
      Swal.fire("Error","Please Enter Tenant Aadhar Doc","error");
      $('#aadhar').focus();
      return;
    }

    const formData: FormData = new FormData();
    formData.append('tenantName', tenantName);
    formData.append('age', age);
    formData.append('mobileno', mobileno);
    formData.append('altmobileno', altmobileno);
    formData.append('member', member);
    formData.append('membermobileno', membermobileno);
    formData.append('houseId', houseId);
    formData.append('roomid', roomid);
    formData.append('rentamount', rentamount);
    formData.append('advanceamount', advanceamount);
    formData.append('efectivedate', efectivedate);
    formData.append('aadhatDoc', this.aadharDoc);
    formData.append('rentDoc', this.rentDoc);
    formData.append('otherDoc', this.otherDoc);
    console.log(this.aadharDoc);

    let alrtmsg="Your previous tenant has not cleared all dues yet. Pending due = 10,000."

    Swal.fire({
      //`<span style="color:red;">Do You Want To Change Your Claim Amount?</span>`
      title: 'Are you sure?',
      text: 'You want to save these details? ' + alrtmsg,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.tenantserv.addroomforhome(formData).subscribe((result:any)=>{
          if(result.status == 200){
            Swal.fire('Saved!', 'Your details have been saved.','success');
          }else{
            Swal.fire('Failed!', 'Failed to save your details. Please try again.', 'error');
          }
        },
          (error:any)=>console.log(error)
        );
      }
    });

  }

  resetVal(){
    window.location.reload();
  }

}
