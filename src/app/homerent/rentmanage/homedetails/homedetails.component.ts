import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { HomerentserviceService } from '../../services/homerentservice.service';
declare let $: any;

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.scss']
})
export class HomedetailsComponent implements OnInit {
  roomlist:any=[1,2,3,4];
  addhouse:boolean=true;
  houseId:any="";
  user:any;
  displayhousedetails:any
  urlPreSurgery: any = "../../assets/img/for-sale.png";

  constructor(private homerentserv:HomerentserviceService,
    public route :Router) { }

  ngOnInit(): void {
    let userdata:any=sessionStorage.getItem('user');
    this.user=JSON.parse(userdata);
    this.houseId=localStorage.getItem('houseId');
    if(this.houseId==null || this.houseId== undefined ||this.houseId=="" || this.houseId==0){
      this.addhouse=true;
    }else{
      this.addhouse=false;
      this.getdisplayhousedetails(this.houseId,this.user.userid);
    }
  }
  getdisplayhousedetails(houseId: any, userid: any) {
    this.homerentserv.getdisplayhousedetails(houseId,userid).subscribe((data:any) => {
      if(data.status == 200){
        this.displayhousedetails = data.record;
      }else{
        Swal.fire("Error","HouseDetails Can't fetch!", "error");
      }
    },
    (error:any) => console.log(error));
  }

  submithousedetails(){
    let houseName =$('#housename').val();
    let totalFloor =$('#floors').val();
    let totalRoom =$('#rooms').val();
    let address =$('#address').val();

    if (houseName==null || houseName== "" || houseName==undefined){
      Swal.fire("Error","Please Enter Your House Name","error");
      $('#housename').focus();
      return;
    }

    if (totalFloor==null || totalFloor== "" || totalFloor==undefined){
      Swal.fire("Error","Please Enter Total Floor In Your House","error");
      $('#floors').focus();
      return;
    }

    if (totalRoom==null || totalRoom== "" || totalRoom==undefined){
      Swal.fire("Error","Please Enter Total Room In Your House","error");
      $('#totalRoom').focus();
      return;
    }

    if (address==null || address== "" || address==undefined){
      Swal.fire("Error","Please Enter Your Full Address","error");
      $('#address').focus();
      return;
    }

    let object={
      homeName:houseName,
      nooffloor:totalFloor,
      noofroom:totalRoom,
      homeLocation:address,
      ownerid:this.user?.userId
    }

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to save these details?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.homerentserv.addnewhome(object).subscribe((result:any)=>{
          if(result.status == 200){
            Swal.fire('Saved!', 'Your details have been saved.','success');
            this.route.navigate(['/rentmanage/homerentmanage/housedetails']);
          }else{
            Swal.fire('Failed!', 'Failed to save your details. Please try again.', 'error');
          }
        },
          (error:any)=>console.log(error)
        );
      } else if (result.isDismissed) {
        Swal.fire('Cancelled', 'Your details have not been saved.', 'error');
      }
    });
  }

  submitroomdetails(){
    let roomno =$('#roomno').val();
    let floor =$('#floor').val();
    let mtrreding =$('#mtrreding').val();
    let unitprice =$('#unitprice').val();

    if (roomno==null || roomno== "" || roomno==undefined){
      Swal.fire("Error","Please Enter Room No","error");
      return;
    }

    if (floor==null || floor== "" || floor==undefined){
      Swal.fire("Error","Please Enter Floor Name Where the Room is Available","error");
      return;
    }

    if (this.image1==null || this.image1== "" || this.image1==undefined){
      Swal.fire("Error","Please Upload Image 1","error");
      return;
    }

    if (this.image2==null || this.image2== "" || this.image2==undefined){
      Swal.fire("Error","Please Upload Image 2","error");
      return;
    }

    const formData: FormData = new FormData();
    formData.append('roomno', roomno);
    formData.append('floorNo', floor);
    formData.append('lastmtrRead', mtrreding);
    formData.append('unitPrice', unitprice);
    formData.append('ownerId', this.user?.userId);
    formData.append('houseId', this.houseId);
    formData.append('image1', this.image1);
    formData.append('image2', this.image2);
    formData.append('image3', this.image3);
    formData.append('image4', this.image4);
    formData.append('image5', this.image4);

    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to save these details?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        this.homerentserv.addroomforhome(formData).subscribe((result:any)=>{
          if(result.status == 200){
            Swal.fire('Saved!', 'Your details have been saved.','success');
          }else{
            Swal.fire('Failed!', 'Failed to save your details. Please try again.', 'error');
          }
        },
          (error:any)=>console.log(error)
        );
      } else if (result.isDismissed) {
        Swal.fire('Cancelled', 'Your details have not been saved.', 'error');
      }
    });
  }

  image1:any;
  image2:any;
  image3:any;
  image4:any;
  image5:any;
  handleFileInput(event:any, no:any){
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
          this.image1 = image;
        }else if(no ==2){
          this.image2 = image;
        }else if(no ==3){
          this.image3 = image;
        }else if(no ==4){
          this.image4 = image;
        }else if(no ==5){
          this.image5 = image;
        }
      }
    }else{
      Swal.fire("Warning", "Please Select File","warning");
    }
  }
}
