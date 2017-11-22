import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ClientsService } from './../clients.service';

declare var $: any

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css'],
  providers: [ClientsService]
})
export class ListClientComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger = new Subject();
  clients: any = [];
  errorMsg
  refId: any
  modalRef: BsModalRef

  constructor(private clientService: ClientsService, private modalService: BsModalService) { }

  ngOnInit() {
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
    this.all()
  }

  all() {
    this.clientService.list().subscribe(
      res => {
        this.clients = res
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
    this.clientService.delete(this.refId.id).subscribe(
      res => {
        const index: number = this.clients.indexOf(this.refId)
        this.modalRef.hide()
        this.successMsg('info','Cliente excluído!','ti-info-alt')
        this.clients.splice(index, 1)
       },
      error => this.errorMsg = error
    )
  }

}
