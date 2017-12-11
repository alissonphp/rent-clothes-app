import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { CategoriesService } from 'app/items/categories/categories.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

declare var $: any

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoriesService]
})
export class CategoriesComponent implements OnInit {

  categories: any = [];
  errorMsg: any;
  dtOptions: any = {};
  dtTrigger = new Subject();
  modalRef: BsModalRef;
  refId: any;

  constructor(private categoriesService: CategoriesService, private modalService: BsModalService) { }

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
    this.listAllItems(true);
  }

  listAllItems(trig: boolean) {
    this.categoriesService.all().subscribe(
      res => {
        this.categories = res
        if(trig) {
          this.dtTrigger.next();
        }
      },
      error => this.errorMsg = error
    )
  }

  openModal(template: TemplateRef<any>, item: any) {
    this.refId = item;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirmDelete() {
    this.categoriesService.delete(this.refId.id).subscribe(
      res => {
        const index: number = this.categories.indexOf(this.refId)
        this.modalRef.hide()
        this.successMsg('Categoria excluída!')
        this.categories.splice(index, 1)
       },
      error => this.errorMsg = error
    )
  }

  updateCategory() {
    this.categoriesService.update(this.refId).subscribe(
      res => {
        this.successMsg('Categoria Atualizada!')
        this.listAllItems(false)
      },
      error => this.errorMsg = error
    )
  }

  successMsg(msg: any) {
    this.modalRef.hide()
    $.notify({
      icon: 'ti-check-box',
      message: '<span class="text-center">' + msg + '</span>'
    }, {
        type: 'success',
        timer: 1500,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
  }
}
