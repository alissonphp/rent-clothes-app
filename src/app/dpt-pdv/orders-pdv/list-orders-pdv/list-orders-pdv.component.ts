import { Component, OnInit, TemplateRef } from '@angular/core';

import { Subject } from 'rxjs/Rx';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { OrdersService } from 'app/orders/orders.service';

declare var $: any

@Component({
  selector: 'app-list-orders-pdv',
  templateUrl: './list-orders-pdv.component.html',
  styleUrls: ['./list-orders-pdv.component.css'],
  providers: [OrdersService]
})
export class ListOrdersPdvComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger = new Subject();
  orders: any = []
  errorMsg
  optSits: any = []
  nitems_situation: any = 1
  reference: any
  modalRef: BsModalRef

  constructor(private orderService: OrdersService, private modalService: BsModalService) { }

  ngOnInit() {
    this.optSits = [
      {'id': 1, 'sit': 'Aguardando'},
      {'id': 2, 'sit': 'Itens em locação'},
      {'id': 3, 'sit': 'Devolvidos'},
    ]
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      dom: 'Bfrtip',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json'
      },
      buttons: [
        'print',
        'excel',
      ]
    };
    this.all(true)
  }

  all(initTable: boolean) {
    this.orderService.list().subscribe(
      res => {
        this.orders = res
        if (initTable) {
          this.dtTrigger.next()
        }
      },
      error => this.errorMsg = error
    )
  }

  openModal(template: TemplateRef<any>, ref: any, size) {
    this.reference = ref
    this.calcPaid()
    this.reference.total_pay = ref.total - this.reference.paid
    this.reference.method = 'Dinheiro'
    this.modalRef = this.modalService.show(template, { class: 'modal-' + size });
  }

  orderPay() {
    this.orderService.pay(this.reference).subscribe(
      res => {
        this.modalRef.hide()
        this.all(false)
        this.successMsg('success', 'Recebimento de valores registrado!', 'ti-check-box')
      },
      error => {
        this.modalRef.hide()
        this.successMsg('danger', 'Erro: ' + error.error, 'ti-alert')
      }
    )
  }

  calcPaid() {
    this.reference.paid = this.reference.pays.reduce(
      (sub, item) => sub + parseFloat(item.value), 0
    )
  }


  setStatus(status: string) {
    this.orderService.status(this.reference.id, status).subscribe(
      res => {
        this.modalRef.hide()
        this.all(false)
        this.successMsg('success', 'Situação da OL atualizada para ' + res.status, 'ti-check-box')
      },
      error => this.errorMsg = error
    )
  }

  setItemsSituation(situation: number) {
    this.orderService.itemsituation(this.reference.id, situation).subscribe(
      res => {
        this.modalRef.hide()
        this.all(false)
        this.successMsg('success', 'Ok! A situação dos itens da OL foi definida como "' + res.status, 'ti-check-box')
      },
      error => this.errorMsg = error
    )
  }

  successMsg(type, data, icon) {
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

  // confirmDelete() {
  //   this.orderService.delete(this.refId.id).subscribe(
  //     res => {
  //       const index: number = this.orders.indexOf(this.refId)
  //       this.modalRef.hide()
  //       this.successMsg('info', 'Ordem excluída!', 'ti-info-alt')
  //       this.orders.splice(index, 1)
  //      },
  //     error => this.errorMsg = error
  //   )
  // }

}
