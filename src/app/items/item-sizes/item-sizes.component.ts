import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ItemsService } from 'app/items/items.service';

declare var $: any

@Component({
  selector: 'app-item-sizes',
  templateUrl: './item-sizes.component.html',
  styleUrls: ['./item-sizes.component.css'],
  providers: [ItemsService]
})
export class ItemSizesComponent implements OnInit {

  modalRef: BsModalRef
  item: any
  errorMsg: any
  refId: any
  itemId: number
  size: any = {
    code: '',
    size: '',
    items_id: '',
    available: '',
  }

  constructor(private itemService: ItemsService, private activatedRoute: ActivatedRoute, private modalService: BsModalService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.itemId = params['id']
    });
    this.getItem()
  }

  getItem() {
    this.itemService.show(this.itemId).subscribe(
      res => this.item = res,
      error => this.errorMsg = error
    )
  }

  openModal(template: TemplateRef<any>, id: any, size) {
    this.refId = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-' + size});
  }

  store() {
    this.size.items_id = this.itemId
    this.itemService.saveSize(this.size).subscribe(
      res => {
        this.modalRef.hide()
        this.item.sizes.push(res)
        this.successMsg('success', 'Novo tamanho cadastrado!', 'ti-check-box')
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

  confirmDelete() {
    this.itemService.deleteSize(this.refId.id).subscribe(
      res => {
        const index: number = this.item.sizes.indexOf(this.refId)
        this.modalRef.hide()
        this.item.sizes.splice(index, 1)
        this.successMsg('info', 'Tamanho excluído!', 'ti-info-alt')
       },
      error => this.errorMsg = error
    )
  }

}
