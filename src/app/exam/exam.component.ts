import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../services/loginservice.service';
import jsPDF from 'jspdf';
declare let $: any;

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
  hosplist:any=[];
  doclist:any=[];
  patlist:any=[];
  nainlist:any=[];
  insname: any;
  insscmname: any;
  scmid: any;

  constructor(private leginsrv:LoginserviceService) { }

  ngOnInit(): void {


    this.hsopital();
  }
  hsopital(){
    this.leginsrv.hoslist().subscribe((data:any)=>{
      this.hosplist=data;
      console.log(data);

          });
  }
  getdoctor(){
    let batchid=$('#batch').val()
    // alert(batchid);
    this.leginsrv.doclist(batchid).subscribe((data:any)=>{
      this.doclist=data;
      console.log(data);

          });

          this.getlist();
  }

  getlist(){
    let batchid=$('#batch').val()
    this.leginsrv.getlist(batchid).subscribe((data:any)=>{
      this.nainlist=data;
      console.log(data);

          });

  }

  getpetient(){
    let batchid=$('#tech').val()
    // alert(batchid);
    this.leginsrv.pat(batchid).subscribe((data:any)=>{
      this.patlist=data;
      console.log(data);

          });
  }

  getpatdetails(){
    let emp=$('#emp').val()
    for(let i=0;i<this.patlist.length;i++){
      if(this.patlist[i].patid==emp){
        this.scmid=this.patlist[i].incscmid
        this.insname=this.patlist[i].insname
        this.insscmname=this.patlist[i].intscmname
        break;
      }
    }
  }


  save(){
    let emp=$('#emp').val()
    let adddate=$('#mark').val()
    let disdate=$('#mark1').val()
    let amount=$('#mark2').val()
    this.leginsrv.savedata(adddate,disdate,amount,this.scmid,emp).subscribe((data:any)=>{
      // this.patlist=data;
      console.log(data);
this.getlist();
          });
  }

  pdf(v:any){
    var doc = new jsPDF('l', 'mm',[297, 210]);
    doc.setFontSize(24)
    doc.text(v.scheme,80,20);
    doc.setFontSize(18)
    doc.text("Under Scheme : "+v.scmeidname,60,30);
    doc.setFontSize(12)
    doc.text("Admission Date : "+v.addmissing,30,30);
    doc.text("Discharge Date : "+v.discharge,120,30);
    // doc.text("Hospital Name : "+v.discharge,60,45);
    doc.text("Doctor Name : "+v.doctorname,60,55);
    doc.text("Patient Name : "+v.patientname,60,65);
    doc.text("Total Amount : "+v.total,60,75);
    doc.text("Insured : "+v.inmsured,60,85);
    doc.text("Payble : "+v.pay,60,95);
    doc.text("4Th Floor  OCAC Tower Bhubaneswar",30,105);


    doc.save('Assessment after One Year- Batch 1 FY22-23.pdf');
  }

}
