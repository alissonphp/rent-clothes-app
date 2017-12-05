import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ItemsService } from '../items.service';

declare var $: any

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ ItemsService ]
})
export class ListComponent implements OnInit {

  items: any = [];
  errorMsg: any;
  refId: any
  dtOptions: any = {};
  dtTrigger = new Subject();
  modalRef: BsModalRef

  constructor(private itemsService: ItemsService, private modalService: BsModalService) { }

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
    this.listAllItems();
  }

  listAllItems() {
    this.itemsService.all().subscribe(
      res => {
        this.items = res
        this.dtTrigger.next();
      },
      error => this.errorMsg = error
    )
  }

  openModal(template: TemplateRef<any>, item: any) {
    this.refId = item;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
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
    this.itemsService.delete(this.refId.id).subscribe(
      res => {
        const index: number = this.items.indexOf(this.refId)
        this.modalRef.hide()
        this.successMsg('info','Item excluído!','ti-info-alt')
        this.items.splice(index, 1)
       },
      error => this.errorMsg = error
    )
  }

}
