import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { CommenService } from '../../services/commen.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { TenentdetailsService } from '../../services/tenentdetails.service';
import { CompliantService } from '../../services/compliant.service';
declare let $: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    roomCountdata:any;
    compliantsumdata:any;
    txtsearchDate:any;
    curyear:any;
    tenantUser:any=[];
    occupiedPercentage: number=0;
    advancePercentage: number =0;
    vacanciesPercentage: number =0;
    revenuecount:any;
    gettenantdata:any;
    
    
  paidrent:any=66; 

  constructor(private readonly commserv:CommenService,
    private readonly tenantserv: TenentdetailsService,
    private readonly compliantserv: CompliantService,
    private readonly router2: Router,
  ) { }

  ngOnInit(): void {
    this.getdashboarddata();
    this.gettenantdetails();
    this.getrequestdetailsForowner();
    this.curyear=new Date().getFullYear();
    this.createSpecialitychart();
    this.createProcedurechart();
  }

  getdashboarddata(){
    this.commserv.getdashboarddata().subscribe((data:any) => {
          if(data.status == 200){
            this.roomCountdata = data.record.roomcountdata;
            this.revenuecount = data.record.revenuecount;
            this.animateCircle();            
          }else{
            Swal.fire("Error","Something Went Wrong!", "error");
          }
        },
        (error:any) => console.log(error));
  }

  gettenantdetails(){
    this.tenantserv.gettenantdetails("","","").subscribe((data:any) => {
        if(data.status == 200){
        this.tenantUser = data.record;
        }else{
        Swal.fire("Error","Tenant Details Can't fetch!", "error");
        }
    },
    (error:any) => console.log(error));
  }

  getrequestdetailsForowner(){
    this.compliantserv.getrequestdetailsForowner().subscribe((data:any) => {
        if(data.status == 200){
            this.compliantsumdata = data.record.sumdata;
        }else{
            Swal.fire("Error","Something Went Wrong !", "error");
        }
        },
        (error:any) => console.log(error));
    }

    getdetails(item:any){
        this.gettenantdata=item;
    }

    downloadTenantDoc(docPath: any) {
        if (docPath) {
            const img = this.commserv.downloadcommondoc(docPath);
            window.open(img, '_blank');
        } else {
            Swal.fire('Info', 'There is no file', 'info');
        }
    }

  animateCircle() {
    // Animation logic can be added here if needed
    setTimeout(() => {
      this.occupiedPercentage = this.roomCountdata.tenantcount>0? (this.roomCountdata.tenantcount / this.roomCountdata.roomcount) * 100:0; // This can be updated dynamically
      this.advancePercentage = this.roomCountdata.advancebook>0? (this.roomCountdata.advancebook / this.roomCountdata.roomcount) * 100:0; // This can be updated dynamically
      this.vacanciesPercentage = this.roomCountdata.available>0? (this.roomCountdata.available / this.roomCountdata.roomcount) * 100:0; // This can be updated dynamically
    }, 500); // Delay for animation effect
  }


  private createSpecialitychart(): void {
    let date = new Date();
    const data: any[] = [];

    const chart = Highcharts.chart('speciality_chart' as any, {
        chart: {
            type: 'column'
        },
        title: {
            text: '', // Modified title
            align: 'left'
        },
        subtitle: {
            text:
                '',
            align: 'left'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
            crosshair: true,
            labels: {
                style: {
                    fontSize: '12px' // Set the font size here
                }
            },
            accessibility: {
                description: ''
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                showInLegend: false
            }
        },
        series: [
            {
                name: '',
                color: '#6FB3B8',
                data: [5000, 6545, 8885, 4521, 2852, 3652, 7822,9585 ,4582 ,4425,15827 ,11425]
            }
        ]
    } as any);
}

private createProcedurechart(): void {
    let date = new Date();
    const data: any[] = [];

    const chart = Highcharts.chart('procedure_chart' as any, {
        chart: {
            type: 'column'
        },
        title: {
            text: '', // Modified title
            align: 'left'
        },
        subtitle: {
            text:
                '',
            align: 'left'
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct','Nov','Dec'],
            crosshair: true,
            labels: {
                style: {
                    fontSize: '12px' // Set the font size here
                }
            },
            accessibility: {
                description: ''
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: ''
            }
        },
        tooltip: {
            valueSuffix: ''
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            },
            series: {
                showInLegend: false
            }
        },
        series: [
            {
                name: '',
                color: '#4AD991',
                data: [5000, 6545, 8885, 4521, 2852, 3652, 7822,9585 ,4582 ,4425,9582 ,8767]
            }
        ]
    } as any);
}

}
