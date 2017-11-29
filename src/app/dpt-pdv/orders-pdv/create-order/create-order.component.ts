import { Component, OnInit } from '@angular/core';

import { ItemsService } from './../../../items/items.service';
import { OrdersService } from './../../../orders/orders.service';
import { ClientsService } from './../../../clients/clients.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
  providers: [ClientsService, ItemsService, OrdersService]
})
export class CreateOrderComponent implements OnInit {

  private searchClient
  private searchItem
  private client
  private itens: any = []
  private resClients: any = []
  private resItens: any = []
  private errorMsg

  constructor(private clientService: ClientsService, private itemService: ItemsService, private orderService: OrdersService) { }

  ngOnInit() {
  }

  getSearchClient() {
    this.clientService.search(this.searchClient).subscribe(
      res => this.resClients = res,
      error => this.errorMsg = error
    )
  }
  getSearchItem() {
    this.itemService.search(this.searchItem).subscribe(
      res => this.resItens = res,
      error => this.errorMsg = error
    )
  }
  setClient(client) {
    this.client = client
  }
  addItem() {}
  rmItem() {}

}