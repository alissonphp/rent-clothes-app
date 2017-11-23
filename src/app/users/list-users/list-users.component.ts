import { Component, OnInit, TemplateRef } from '@angular/core';
import { UsersService } from 'app/users/users.service';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
declare var $: any
@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css'],
  providers: [UsersService]
})
export class ListUsersComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger = new Subject();
  users: any = [];
  errorMsg
  refId: any
  modalRef: BsModalRef

  constructor(private userService: UsersService, private modalService: BsModalService) { }

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
    this.userService.list().subscribe(
      res => {
        this.users = res
        this.dtTrigger.next()
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
        timer: 2000,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
  }

  confirmDelete() {
    this.userService.delete(this.refId.id).subscribe(
      res => {
        const index: number = this.users.indexOf(this.refId)
        this.modalRef.hide()
        this.successMsg('info', 'Usuário excluído!', 'ti-info-alt')
        this.users.splice(index, 1)
       },
      error => {
        this.errorMsg = error
        this.modalRef.hide()
        this.successMsg('danger', error, 'ti-alert')
      }
    )
  }

}
