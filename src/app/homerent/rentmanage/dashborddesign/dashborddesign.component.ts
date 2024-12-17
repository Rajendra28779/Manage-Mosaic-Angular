import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
declare let $: any;

@Component({
  selector: 'app-dashborddesign',
  templateUrl: './dashborddesign.component.html',
  styleUrls: ['./dashborddesign.component.scss']
})
export class DashborddesignComponent implements OnInit {
  currentPage: any;
  CustomScrollbarOptions:any;

  constructor() { }



  ngOnInit(): void {

      this.createDonutEpanelment();
      this.createDonutnew();
      this.createDonutnew2();


      this.createDepartmentchart();
      this.createAuthenticatechart();
      this.createSpecialitychart();
      this.createProcedurechart();


  }



  private createDonutnew(): void {
    Highcharts.setOptions({
        colors: ['#F9CD5A', '#F9CD5A', '#F4714F']
    });

    const chart = Highcharts.chart('donutprice_chart' as any, {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 112,
            margin: [-3, 0, 0, 0],
        },
        title: {
          text: '', // Modified title
          align: 'left'
      },

        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false // Disable tooltip
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false // Disable data labels
                },
                showInLegend: false // Disable legend
            }
        },
        series: [{
            name: '',
            colorByPoint: true,
            depth: '40%',
            innerSize: '60%',
            data: [{
                name: 'NFSA',
                color: '#4AD991',
                y: 20,
            }, {
                name: 'SFSA',
                color: '#F4714F',
                y: 20
            }, {
                name: 'Nabin',
                color: '#F9CD5A',
                y: 20
            }]
        }]
    } as any);

    // Adjust chart size if needed
    function adjustChartSize() {
        // Additional size adjustments can be made here if necessary
    }

    // Call adjustChartSize on page load and window resize
    adjustChartSize();
    window.addEventListener('resize', adjustChartSize);
}


private createDonutnew2(): void {
  Highcharts.setOptions({
      colors: ['#F9CD5A', '#F9CD5A', '#F4714F']
  });

  const chart = Highcharts.chart('donutprice_chartnew' as any, {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          height: 112,
          margin: [-3, 0, 0, 0],
      },
      title: {
        text: '', // Modified title
        align: 'left'
    },

      credits: {
          enabled: false
      },
      tooltip: {
          enabled: false // Disable tooltip
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false // Disable data labels
              },
              showInLegend: false // Disable legend
          }
      },
      series: [{
          name: '',
          colorByPoint: true,
          depth: '40%',
          innerSize: '60%',
          data: [{
              name: 'NFSA',
              color: '#4AD991',
              y: 20,
          }, {
              name: 'SFSA',
              color: '#F4714F',
              y: 20
          }, {
              name: 'Nabin',
              color: '#F9CD5A',
              y: 20
          }]
      }]
  } as any);

  // Adjust chart size if needed
  function adjustChartSize() {
      // Additional size adjustments can be made here if necessary
  }

  // Call adjustChartSize on page load and window resize
  adjustChartSize();
  window.addEventListener('resize', adjustChartSize);
}



private createDonutEpanelment(): void {
  let date = new Date();
  const data: any[] = [];

  Highcharts.setOptions({
      colors: ['#01BAF2', '#71BF45', '#FAA74B']
  });

  const chart = Highcharts.chart('empanelment_chart' as any, {
      chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie',
          height: 310,

      },
      title: {
          text: '<h2 style="font-weight: bold; margin: 0; font-size: 1.6rem;">5300 </h2> <span style="color:#636363; font-weight:normal;"> Application <br> Received </span>',
          useHTML: true,
          align: 'center', // Center-align the title initially
          verticalAlign: 'middle', // Vertically center the title initially
          style: {
              fontSize: '12px',
              fontWeight: 'bold',
              color: '#000',
              fill: '000'
          }
      },
      legend: {
          enabled: true, // Enable the legend
          align: 'left', // Align legend to the center horizontally
          layout: 'horizontal', // Display legend items horizontally
          verticalAlign: 'bottom', // Align legend to the bottom
          itemMarginBottom: 4,
          itemStyle: {
              fontSize: '12px', // Set the font size
              fontWeight: 'normal'
          }
      },

      credits: {
          enabled: false
      },
      tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
          pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                  enabled: false,
                  format: '<b>{point.name}</b>: {point.percentage:.0f}%', // Adjusted format
                  style: {
                      fontSize: '14px', // Adjust font size of data labels
                      textOutline: '1px white' // Add text outline to data labels
                  }
              },
              showInLegend: true
          }
      },
      series: [{
          name: 'Composition',
          colorByPoint: true,
          depth: '30%',
          innerSize: '80%',

          data: [{
              name: 'Pending at CDMO', // Added "In Progress" text
              color: '#4AD991',
              y: 20,
          }, {
              name: 'Pending at DC',
              color: '#FF9A75',
              y: 20
          }, {
              name: 'Pending at SHAS',
              color: '#49AED4',
              y: 20
          }, {
              name: 'Pending at HOSPITAL',
              color: '#F4714F',
              y: 20

          },{
              name: 'Approved at SHAS',
              color: '#FEC53D',
              y: 20

          }]
      }]
  } as any);

  function adjustTitlePosition() {
      const screenWidth = window.innerWidth;

      if (screenWidth > 1440) {
        chart.setTitle({
            align: 'center',
            verticalAlign: 'middle',
            x: 0,
            y: -45,
            style: {
              textAlign:"center",
          }
        });
    } else
      if (screenWidth < 1440) {
          chart.setTitle({
              align: 'center',
              verticalAlign: 'middle',
              x: 0,
              y: -45,
              style: {
                textAlign:"center",
            }
          });
      } else {
          chart.setTitle({
              align: 'center',
              verticalAlign: 'middle',
              x: 0,
              y: -30,
              style: {
                textAlign:"center",
            }

          });
      }

      if (screenWidth <= 1024) {

          chart.setTitle({
              align: 'center',
              verticalAlign: 'middle',
              x: 0,
              y: -20,
              style: {
                  textAlign:"center",
              }
          });
  }

  if (screenWidth <= 768) {

      chart.setTitle({
          align: 'center',
          verticalAlign: 'middle',
          x: 0,
          y: -5,
          style: {
              textAlign:"center",
          }
      });
}

if (screenWidth <= 480) {

  chart.setTitle({
      align: 'center',
      verticalAlign: 'middle',
      x: 0,
      y: -40,
      style: {
          fontSize: '12px',
          textAlign:"center",
      }
  });
}


if (screenWidth <= 375) {

  chart.setTitle({
      align: 'center',
      verticalAlign: 'middle',
      x: 0,
      y: -30,
      style: {
          fontSize: '12px',
          textAlign:"center",
      }
  });
}

if (screenWidth <= 320) {

chart.setTitle({
  align: 'center',
  verticalAlign: 'middle',
  x: 0,
  y: -35,
  style: {
      fontSize: '12px',
      textAlign:"center",
  }
});
}




  }

  // Call adjustTitlePosition on page load and window resize
  adjustTitlePosition();
  window.addEventListener('resize', adjustTitlePosition);
}









  private createDepartmentchart(): void {
      let date = new Date();
      const data: any[] = [];

      const chart = Highcharts.chart('department_chart' as any, {
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
              categories: ['SHAS CEO', 'SNA', 'FINANCE', 'JOINT CEO', 'DEP.CEO', 'FO', 'AUDITOR'],
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
                  color: '#49AED4',
                  data: [5000, 6545, 8885, 4521, 5785, 9858, 7452]
              }
          ]
      } as any);



  }



  private createAuthenticatechart(): void {
      let date = new Date();
      const data: any[] = [];

      const chart = Highcharts.chart('authenticate_chart' as any, {
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
              categories: ['OTP', 'IRIS', 'FIGER', 'FACE'],
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
                  color: '#F4714F',
                  data: [5000, 6545, 8885, 4521]
              }
          ]
      } as any);



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
              categories: ['CARDIOLOGY', 'NEUROLOGY', 'ORTHOPEDICS', 'PEDIATRICS', 'ONCOLOGY', 'DERMATOLOGY', 'PSYCHIATRY', 'UROLOGY', 'ENT', 'PULMONOLOGY'],
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
                  color: '#D8AE4B',
                  data: [5000, 6545, 8885, 4521, 2852, 3652, 7822,9585 ,4582 ,4425]
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
              categories: ['APPY', 'CABG', 'COLONO', 'CATARACT', 'C-SECTION', 'ENDO', 'PTCA', 'MRI', 'TONSIL', 'TKR/THR'],
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
                  data: [5000, 6545, 8885, 4521, 2852, 3652, 7822,9585 ,4582 ,4425]
              }
          ]
      } as any);
  }

pageChanged(page:any){
  this.currentPage =page;
}

public ngAfterViewInit(): void {
}


}

