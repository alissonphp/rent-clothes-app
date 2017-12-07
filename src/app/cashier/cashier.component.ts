import { Component, OnInit } from '@angular/core';

import { UsersService } from 'app/users/users.service';
import { CashierService } from 'app/cashier/cashier-service.service';

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css'],
  providers: [UsersService, CashierService]
})
export class CashierComponent implements OnInit {

  filter: any = {
    user: 'all',
    start: '',
    end: ''
  }
  users: any
  results: any = []
  totalCashier

  constructor(private userService: UsersService, private cashierService: CashierService) { }

  ngOnInit() {
    this.getUsers()
  }

  getUsers() {
    this.userService.role(2).subscribe(
      res => this.users = res,
      error => console.log(error)
    )
  }

  applyFilter() {
    this.cashierService.filter(this.filter).subscribe(
      res => {
        this.results = res,
        this.calcTotal()
      },
      error => console.log(error)
    )
  }

  calcTotal() {
    this.totalCashier = this.results.reduce(
      (sub, item) => sub + parseFloat(item.total), 0
    )
  }

}
