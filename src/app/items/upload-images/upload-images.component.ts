import { Component, OnInit } from '@angular/core';
import { FileUploader, FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { environment } from './../../../environments/environment';
import { LocalStorageService } from 'ngx-webstorage';

@Component({
  selector: 'app-upload-images',
  templateUrl: './upload-images.component.html',
  styleUrls: ['./upload-images.component.scss']
})

export class UploadImagesComponent implements OnInit {

  constructor(
    private localStorageService: LocalStorageService,
    private activatedRoute: ActivatedRoute
  ) { }

  refId: number
  options: any = []

  public uploader: FileUploader = new FileUploader({});

  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
      this.refId = params['id'];
    });
  }

  ngAfterViewInit() {
    this.options['authToken'] = 'Bearer ' + this.localStorageService.retrieve('token')
    // this.options['itemAlias'] = 'itemImage'
    this.options['method'] = 'POST'
    this.options['url'] = environment.api + environment.version + '/items/item/images/upload/' + this.refId,
    this.uploader.setOptions(this.options);
    this.uploader.onAfterAddingFile = (item => {
       item.withCredentials = false;
    });
 }
}
