import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/users/users.service';

@Component({
  selector: 'app-goals-seller',
  templateUrl: './goals-seller.component.html',
  styleUrls: ['./goals-seller.component.css'],
  providers: [UsersService]
})
export class GoalsSellerComponent implements OnInit {

  goals
  multi: any[];
  totalCashier
  totalCommission

  view: any[] = [600, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Metas';
  showYAxisLabel = true;
  yAxisLabel = 'Valor (R$)';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.userService.goalSeller().subscribe(
      res => {
        this.goals = res,
        this.getTotalCashier(res)
        this.multi = [
          {
            "name": "Vendedor",
            "series": [
              {
                "name": "Objetivo",
                "value": res.goal_seller
              },
              {
                "name": "Alcançado",
                "value": res.goal_seller_now
              },
            ]
          },
          {
            "name": "Loja",
            "series": [
              {
                "name": "Objetivo",
                "value": res.goal_store
              },
              {
                "name": "Alcançado",
                "value": res.goal_store_now
              },
            ]
          },
        ];
      },
      error => console.log(error)
    )

  }

  getTotalCashier(goals) {
    this.totalCashier = goals.commissions.reduce(
      (sub, item) => sub + parseFloat(item.cashier.total), 0
    )
    this.totalCommission = goals.commissions.reduce(
      (sub, item) => sub + parseFloat(item.commission), 0
    )
  }

}
