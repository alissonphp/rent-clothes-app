import { Component, OnInit, TemplateRef } from '@angular/core';
import { FileUploader, FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { environment } from './../../../environments/environment';
import { LocalStorageService } from 'ngx-webstorage';
import { CategoriesService } from 'app/items/categories/categories.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { ItemsService } from './../items.service';

declare var $: any

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss'],
  providers: [ItemsService]
})

export class UploadImagesComponent implements OnInit {

  refId: number
  options: any = []
  errorMsg
  item = {
    id: '',
    label: '',
    price: ''
  }
  images = []
  imgUrl = environment.api + 'drive/products/'
  modalRef: BsModalRef;

  public uploader: FileUploader = new FileUploader({});

  constructor(
    private localStorageService: LocalStorageService,
    private itemService: ItemsService,
    private modalService: BsModalService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.refId = params['id'];
    });
    this.getItem()
  }

  getItem() {
    this.itemService.show(this.refId).subscribe(
      res => {
        this.item = res
        this.images = res.images
      },
      error => this.errorMsg = error
    )
  }

  ngAfterViewInit() {
    this.options['authToken'] = 'Bearer ' + this.localStorageService.retrieve('token')
    this.options['method'] = 'POST'
    this.options['url'] = environment.api + environment.version + '/items/item/images/upload/' + this.refId,
    this.uploader.setOptions(this.options);
    this.uploader.onAfterAddingFile = (item => {
       item.withCredentials = false;
    });

    this.uploader.onCompleteAll = () => {
      console.log('complete');
      $.notify({
        icon: 'ti-check-box',
        message: '<span class="text-center">Imagens carregadas com sucesso!</span>'
      }, {
          type: 'success',
          timer: 1500,
          placement: {
              from: 'top',
              align: 'center'
          }
      });
    };

 }

 openModal(template: TemplateRef<any>, id: number) {
  this.refId = id;
  this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
}

confirmDelete() {
  this.itemService.deleteImg(this.refId).subscribe(
    res => {
      const index: number = this.images.indexOf(this.refId)
      this.modalRef.hide()
      this.successMsg('success','Imagem excluída','ti-check-box')
      this.images.splice(index, 1)
     },
    error => this.errorMsg = error
  )
}

successMsg(type, msg, icon) {
  this.modalRef.hide()
  $.notify({
    icon: icon,
    message: '<span class="text-center">'+msg+'</span>'
  }, {
      type: type,
      timer: 1500,
      placement: {
          from: 'top',
          align: 'center'
      }
  });
}

}
