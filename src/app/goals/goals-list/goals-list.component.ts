import { Component, OnInit, TemplateRef } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GoalsService } from './../goals.service';

declare var $: any

@Component({
  selector: 'app-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.css'],
  providers: [GoalsService]
})
export class GoalsListComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger = new Subject();
  goals: any = [];
  errorMsg
  ref: any
  modalRef: BsModalRef

  constructor(private modalService: BsModalService, private goalService: GoalsService) { }

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
    this.goalService.list().subscribe(
      res => {
        this.goals = res
        this.dtTrigger.next();
      },
      error => this.errorMsg = error
    )
  }

  openModal(template: TemplateRef<any>, ref: any, size) {
    this.ref = ref;
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
    this.goalService.delete(this.ref.id).subscribe(
      res => {
        const index: number = this.goals.indexOf(this.ref)
        this.modalRef.hide()
        this.successMsg('info', 'Meta excluída!', 'ti-info-alt')
        this.goals.splice(index, 1)
       },
      error => this.errorMsg = error
    )
  }

}
