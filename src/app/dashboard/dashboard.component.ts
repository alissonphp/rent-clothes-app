import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DashboardService } from './dashboard.service';

declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    providers: [DashboardService]
})

export class DashboardComponent implements OnInit {
  data: any
  constructor(private dashboardService: DashboardService) {}

    ngOnInit() {

      this.totals()
        
      // var dataSales = {
      //     labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
      //     series: [
      //         [287, 385, 490, 562, 594, 626, 698, 895, 952],
      //         [67, 152, 193, 240, 387, 435, 535, 642, 744],
      //         [23, 113, 67, 108, 190, 239, 307, 410, 410]
      //     ]
      //   };

        // var optionsSales = {
        //   low: 0,
        //   high: 1000,
        //   showArea: true,
        //   height: "245px",
        //   axisX: {
        //     showGrid: false,
        //   },
        //   lineSmooth: Chartist.Interpolation.simple({
        //     divisor: 3
        //   }),
        //   showLine: true,
        //   showPoint: false,
        // };

        // var responsiveSales = [
        //   ['screen and (max-width: 640px)', {
        //     axisX: {
        //       labelInterpolationFnc: function (value) {
        //         return value[0];
        //       }
        //     }
        //   }]
        // ];

        // Chartist.Line('#chartHours', dataSales, optionsSales, responsiveSales);


        // var data = {
        //   labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        //   series: [
        //     [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
        //     [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
        //   ]
        // };

        // var options = {
        //     seriesBarDistance: 10,
        //     axisX: {
        //         showGrid: false
        //     },
        //     height: "245px"
        // };

        // var responsiveOptions = [
        //   ['screen and (max-width: 640px)', {
        //     seriesBarDistance: 5,
        //     axisX: {
        //       labelInterpolationFnc: function (value) {
        //         return value[0];
        //       }
        //     }
        //   }]
        // ];

        // Chartist.Line('#chartActivity', data, options, responsiveOptions);

        // var dataPreferences = {
        //     series: [
        //         [25, 30, 20, 25]
        //     ]
        // };

        // var optionsPreferences = {
        //     donut: true,
        //     donutWidth: 40,
        //     startAngle: 0,
        //     total: 100,
        //     showLabel: false,
        //     axisX: {
        //         showGrid: false
        //     }
        // };

        // Chartist.Pie('#chartPreferences', dataPreferences, optionsPreferences);
        const responsiveOptions1 = [
          ['screen and (min-width: 640px)', {
            chartPadding: 30,
            labelOffset: 100,
            total: 100,
            donut: true,
            labelDirection: 'explode',
            labelInterpolationFnc: function(value) {
              return value;
            }
          }],
          ['screen and (min-width: 1024px)', {
            labelOffset: 80,
            chartPadding: 20
          }]
        ];

        const options1 = {
          labelInterpolationFnc: function(value) {
            return value[0]
          }
        };

        Chartist.Pie('#chartPreferences', {
          labels: ['$ parcial','$ total','final.', 'cancel.'],
          series: [40, 20, 20, 20]
        }, options1, responsiveOptions1);
    }

    totals() {
      this.dashboardService.home().subscribe(
        res => this.data = res,
        error => console.log(error)
      )
    }
}
