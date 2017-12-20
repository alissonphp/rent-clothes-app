import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { OrdersService } from 'app/orders/orders.service';

declare var window: any;

@Component({
  selector: 'app-print-contract',
  templateUrl: './print-contract.component.html',
  styleUrls: ['./print-contract.component.css'],
  providers: [OrdersService]
})
export class PrintContractComponent implements OnInit {

  orderId: number
  order: any
  errorMsg: any

  constructor(private orderService: OrdersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => this.orderId = params['id']
    )

    this.show()

  }

  show() {
    this.orderService.show(this.orderId).subscribe(
      res => {
        this.order = res
       },
      error => this.errorMsg = error
    )
  }

  print() {
    return window.print()
  }

}
