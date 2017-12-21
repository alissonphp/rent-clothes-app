import { Component, OnInit } from '@angular/core';

import { UsersService } from 'app/users/users.service';
import { CashierService } from 'app/cashier/cashier-service.service';

declare var moment: any

@Component({
  selector: 'app-cashier',
  templateUrl: './cashier.component.html',
  styleUrls: ['./cashier.component.css'],
  providers: [UsersService, CashierService]
})
export class CashierComponent implements OnInit {

  filter: any = {
    user: 'all',
    start: moment().format('YYYY-MM-DD'),
    end: moment().format('YYYY-MM-DD')
  }
  users: any
  results: any = []
  totalCashier
  totalMoney
  totalDebit
  totalCredit

  constructor(private userService: UsersService, private cashierService: CashierService) { }

  ngOnInit() {
    this.getUsers()
    this.applyFilter()
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
        this.results = res
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

  calcTotalMethod(method: string) {
    const test = this.results.filter(
      (item) => item.method === method
    )
    return test.reduce(
      (sub, item) => sub + parseFloat(item.total), 0
    )
  }

}
