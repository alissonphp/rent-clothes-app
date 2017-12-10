import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal/bs-modal.service';
import { BannersService } from 'app/banners/banners.service';
import { TemplateRef } from '@angular/core/src/linker/template_ref';
import { environment } from 'environments/environment';

declare var $: any

@Component({
  selector: 'app-list-banners',
  templateUrl: './list-banners.component.html',
  styleUrls: ['./list-banners.component.css'],
  providers: [BannersService]
})
export class ListBannersComponent implements OnInit {

  dtOptions: any = {};
  dtTrigger = new Subject();
  banners: any = [];
  errorMsg
  baseUrlImg = environment.api + 'drive/banners/'
  refId: any
  modalRef: BsModalRef

  constructor(private bannerService: BannersService, private modalService: BsModalService) { }

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
    this.bannerService.list().subscribe(
      res => {
        this.banners = res
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
    this.bannerService.delete(this.refId.id).subscribe(
      res => {
        const index: number = this.banners.indexOf(this.refId)
        this.modalRef.hide()
        this.successMsg('info', 'Cliente excluído!', 'ti-info-alt')
        this.banners.splice(index, 1)
       },
      error => this.errorMsg = error
    )
  }

}
