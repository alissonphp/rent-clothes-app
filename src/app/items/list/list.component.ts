import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ ItemsService ]
})
export class ListComponent implements OnInit {

  items: any = [];
  errorMsg: any;
  refId: number
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

  openModal(template: TemplateRef<any>, id: number) {
    this.refId = id;
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  confirmDelete() {
    this.itemsService.delete(this.refId).subscribe(
      res => {
        console.log(res)
       },
      error => this.errorMsg = error
    )
  }

}
