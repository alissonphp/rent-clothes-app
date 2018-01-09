import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import { DashboardService } from './dashboard.service';

declare var $: any;

@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  styleUrls: ['dashboard.component.css'],
  templateUrl: 'dashboard.component.html',
  providers: [DashboardService]
})

export class DashboardComponent implements OnInit {

  data: any
  dataGraph: any
  months: any
  goals: any
  effective: any
  chart = false

  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {

    this.totals()
    this.graph()

  }

  totals() {
    this.dashboardService.home().subscribe(
      res => this.data = res,
      error => console.log(error)
    )
  }

  graph() {
    this.dashboardService.graph().subscribe(
      res => {
        this.dataGraph = res
        this.months = this.dataGraph.map(
          (item) => item.month
        )
        this.goals = this.dataGraph.map(
          (item) => parseFloat(item.goal_store)
        )
        this.effective = this.dataGraph.map(
          (item) => {
            if (item.goal_store_now !== null) {
              return parseFloat(item.goal_store_now)
            } else {
              return 0
            }
          }
        )
        this.loadChart()
      },
      error => console.log(error)
    )
  }

  loadChart() {

    const data = {
      labels: this.months,
      series: [
        this.goals,
        this.effective
      ]
    };

    const options = {
      seriesBarDistance: 4,
      fullWidth: true,
      lineSmooth: Chartist.Interpolation.simple({
        divisor: 3
      }),
      axisX: {
        showGrid: true,
        offset: 30,
        labelOffset: {
          x: 0,
          y: 0
        },
        showLabel: true,
        labelInterpolationFnc: Chartist.noop,
      },
      axisY: {
        offset: 40,
        position: 'start',
        labelOffset: {
          x: 0,
          y: 0
        },
        showLabel: true,
        showGrid: true,
        labelInterpolationFnc: Chartist.noop,
        type: undefined,
        scaleMinSpace: 20,
        onlyInteger: false
      },
      height: "290px"
    };

    const responsiveOptions = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            // return value[0]
          }
        }
      }]
    ]
    Chartist.Line('#chartActivity', data, options, responsiveOptions)
    this.chart = true
    console.log(this.months)
    console.log(this.goals)
    console.log(this.effective)
  }
}
