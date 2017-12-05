import { Component, OnInit } from '@angular/core';

import { ItemsService } from './../../../items/items.service';
import { OrdersService } from './../../../orders/orders.service';
import { ClientsService } from './../../../clients/clients.service';
import { Router } from '@angular/router';

declare var moment: any
declare var $: any

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css'],
  providers: [ClientsService, ItemsService, OrdersService]
})
export class CreateOrderComponent implements OnInit {

  searchClient
  searchItem
  client
  seller_id
  itens: any = []
  sellers: any = []
  resClients: any
  resItens: any
  errorMsg
  discount: any = 0.00
  out
  return
  days
  subtotal
  total
  loadClients = false
  loadItens = false
  today = moment().format('YYYY-MM-DD')
  obs: any
  payment_method: any

  constructor(private clientService: ClientsService, 
    private itemService: ItemsService,
    private router: Router,
    private orderService: OrdersService) { }

  ngOnInit() {
    this.orderService.sellers().subscribe(
      res => this.sellers = res,
      error => this.errorMsg = error
    )
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
    this.days = moment(this.return).diff(this.out, 'days')
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

  createOrder() {
    const data = {
      clients_id: this.client.id,
      users_id: this.seller_id,
      output: this.out,
      expected_return: this.return,
      subtotal: this.subtotal,
      payment_method: this.payment_method,
      discount: this.discount,
      total: this.total,
      obs: this.obs,
      itens: this.itens,
      days: this.days
    }
    this.orderService.save(data).subscribe(
      res => {
        this.popMsg('success','Ordem de Locação Num. ' + res.code + ' gerada com sucesso!', 'ti-check-box')
        this.router.navigate(['dpt-pdv/orders/view', res.id])
      },
      error => this.popMsg('error','Ocorreu um problema ao gerar a ordem', 'ti-info')
    )
  }

}