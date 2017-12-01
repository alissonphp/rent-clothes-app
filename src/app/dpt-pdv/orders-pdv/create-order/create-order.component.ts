import { Component, OnInit } from '@angular/core';

import { ItemsService } from './../../../items/items.service';
import { OrdersService } from './../../../orders/orders.service';
import { ClientsService } from './../../../clients/clients.service';

declare var moment: any
declare var $: any

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
  private resClients: any
  private resItens: any
  private errorMsg
  private discount: any = 0.00
  private out
  private return
  private days
  private subtotal
  private total
  private loadClients = false
  private loadItens = false
  today = moment().format('YYYY-MM-DD')

  constructor(private clientService: ClientsService, private itemService: ItemsService, private orderService: OrdersService) { }

  ngOnInit() {

  }

  getSearchClient() {
    this.loadClients = true
    this.clientService.search(this.searchClient).subscribe(
      res => {
        this.resClients = res
        this.loadClients = false
      },
      error => this.errorMsg = error
    )
  }
  calcDiff() {
    this.days = moment(this.return).diff(this.out, 'days') + 1
  }
  getSearchItem() {
    this.loadItens = true
    this.itemService.search(this.searchItem).subscribe(
      res => {
        this.resItens = res
        this.loadItens = false
      },
      error => this.errorMsg = error
    )
  }
  setClient(client) {
    this.client = client
    this.resClients = ''
    this.searchClient = client.name
    this.popMsg('info', 'Cliente selecionado "' + client.name + '" para a OL!', 'ti-check-box')
  }
  addOrderItem(item) {
    item.days = this.days
    item.subtotal = item.price * item.days
    this.itens.push(item)
    this.setSubtotalOrder()
    this.popMsg('info', 'Item #' + item.code + ' adicionado à OL!', 'ti-check-box')
  }
  setSubtotalOrder() {
    this.subtotal = this.itens.reduce(
      (sub, item) => sub + item.subtotal, 0
    )
    this.setTotal()
  }
  setTotal() {
    this.total = this.subtotal - this.discount
  }
  rmItem(item) {
    const index: number = this.itens.indexOf(item)
    this.popMsg('info', 'Item excluído!', 'ti-info-alt')
    this.itens.splice(index, 1)
    this.setSubtotalOrder()
  }

  popMsg(type, data, icon) {
    $.notify({
      icon: icon,
      message: '<span class="text-center">' + data + '</span>'
    }, {
        type: type,
        timer: 1500,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
  }

}