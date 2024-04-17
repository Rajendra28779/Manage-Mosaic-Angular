import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { LoginserviceService } from '../services/loginservice.service';
declare let $: any;

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.scss']
})
export class AssesmentComponent implements OnInit {
batchlist:any=[]
techlist:any=[]
emplist:any=[]
data:any
data1:any=[]


  constructor(private leginsrv:LoginserviceService) { }

  ngOnInit(): void {
    this.getbatchlist();
    this.gettechlist();
  }
  getbatchlist(){
    this.leginsrv.getbatchlist().subscribe((data:any)=>{
this.batchlist=data;
console.log(data);

    });
  }
  gettechlist(){
    this.leginsrv.gettechlist().subscribe((data:any)=>{
      this.techlist=data;
      console.log(data);

          });
  }
  getemplist(){
// alert("hi")
    let batchid=$('#batch').val()
    let techid=$('#tech').val()
    if(batchid==undefined || batchid==null || batchid==""){
      alert("please choose Batch Name")
      return;
    }
    if(techid==undefined || techid==null || techid==""){
      alert("please choose technology Name")
      return;
    }
    this.leginsrv.getemplist(batchid,techid).subscribe((data:any)=>{
      this.emplist=data;
      console.log(data);

          });
  }
  save(){
    let emp=$('#emp').val()
    let mark=$('#mark').val()
    if(parseInt(mark)>100){
      alert("Mark should less then 100")
      return;
    }
    if(emp==undefined || emp==null || emp==""){
      alert("please choose Employee Name")
      return;
    }
    if(mark==undefined || mark==null || mark==""){
      alert("please Fill Mark")
      return;
    }
    this.leginsrv.save(emp,mark).subscribe((data:any)=>{
      this.data=data;
      console.log(data);
alert(this.data.message)
          });
  }

  search(){
    let batchid=$('#batch1').val()
    this.leginsrv.search(batchid).subscribe((data:any)=>{
      this.data1=data;
      console.log(data);

          });
  }

  report: any = [];
  sno: any = {
    Slno: "",
    bn: "",
     sd: "",
     tn:"",
    em: "",
    ep: "",
    m: "",
    g: "",
    s: "",
  };


  heading = [['Sl No.', 'Batch Name', 'Start Date','TEchnology Name', 'Employee Name', 'Employee Phone','Mark','Grade','Status']];
  pdf(){
    if(this.data1.length==0){
      alert("No Record Found");
      return;
    }
    this.report = [];
    let sna: any;
    for (var i = 0; i < this.data1.length; i++) {
      sna=this.data1[i];
      this.sno=[];
      this.sno.Slno=i+1
      this.sno.bn=sna.batchname;
      this.sno.sd=sna.startdate;
      this.sno.tn=sna.tech;
      this.sno.em=sna.emp;
      this.sno.ep=sna.pho;
      this.sno.m=sna.mark;
      this.sno.g=sna.grade;
      this.sno.s=sna.status;
      this.report.push(this.sno);
    }
    if(this.report==null || this.report.length==0) {
      alert("No Record Found");
      return;
    }
    var doc = new jsPDF('l', 'mm',[297, 210]);
    var rows = [];
    for(var i=0;i<this.report.length;i++) {
      var notdetails=this.report[i]
      var pdf = [];
      pdf[0]=notdetails.Slno
      pdf[1] = notdetails.bn;
      pdf[2] = notdetails.sd;
      pdf[3] = notdetails.tn;
      pdf[4] = notdetails.em;
      pdf[5] = notdetails.ep;
      pdf[6] = notdetails.m;
      pdf[7] = notdetails.g;
      pdf[8] = notdetails.s;

      rows.push(pdf);
    }
    autoTable(doc, {
      head: this.heading,
      body: rows,
      theme: 'grid',
      startY: 20,
      //startX: 50,
      headStyles: {
        fillColor: [26, 99, 54]
      },
      columnStyles: {
        0: {cellWidth: 10},
        1: {cellWidth: 40},
        2: {cellWidth: 30},
        3: {cellWidth: 30},
        4: {cellWidth: 30},
        5: {cellWidth: 30},
        6: {cellWidth: 30},
        7: {cellWidth: 30},
        8: {cellWidth: 30},

        // 6: {cellWidth: 25},
        // 7: {cellWidth: 25},
        // 8: {cellWidth: 30},
        // 9: {cellWidth: 30},

      }
    });
    doc.save('Assessment after One Year- Batch 1 FY22-23.pdf');
  }

}
