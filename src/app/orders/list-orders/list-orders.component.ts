import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { OrdersService } from 'app/orders/orders.service';

declare var $: any

@Component({
  selector: 'app-list-orders',
  templateUrl: './list-orders.component.html',
  styleUrls: ['./list-orders.component.css'],
  providers: [ OrdersService ]
})
export class ListOrdersComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger = new Subject();
  orders: any = [];
  errorMsg
  refId: any
  modalRef: BsModalRef

  constructor(private orderService: OrdersService, private modalService: BsModalService) { }

  ngOnInit() {
    this.all()
  }

  all() {
    this.orderService.list().subscribe(
      res => {
        this.orders = res
        this.dtTrigger.next();
      },
      error => this.errorMsg = error
    )
  }

  openModal(template: TemplateRef<any>, ref: any, size) {
    this.refId = ref;
    this.modalRef = this.modalService.show(template, {class: 'modal-' + size});
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

  confirmDelete() {
    this.orderService.delete(this.refId.id).subscribe(
      res => {
        const index: number = this.orders.indexOf(this.refId)
        this.modalRef.hide()
        this.successMsg('info', 'Ordem excluída!', 'ti-info-alt')
        this.orders.splice(index, 1)
       },
      error => this.errorMsg = error
    )
  }

}
