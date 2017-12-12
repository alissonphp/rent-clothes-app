import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'app/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard-pdv',
  templateUrl: './dashboard-pdv.component.html',
  styleUrls: ['./dashboard-pdv.component.css'],
  providers: [DashboardService]
})
export class DashboardPdvComponent implements OnInit {
  data: any
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.totals()
  }

  totals() {
    this.dashboardService.home().subscribe(
      res => this.data = res,
      error => console.log(error)
    )
  }

}
