import { Component, OnInit } from '@angular/core';
import { BannersService } from 'app/banners/banners.service';
import { FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { LocalStorageService } from 'ngx-webstorage';
import { FileUploader } from 'ng2-file-upload';
import { environment } from 'environments/environment';

declare var $: any

@Component({
  selector: 'app-upload-banners',
  templateUrl: './upload-banners.component.html',
  styleUrls: ['./upload-banners.component.css'],
  providers: [BannersService]
})


export class UploadBannersComponent implements OnInit {
  refId: number
  options: any = []

  public uploader: FileUploader = new FileUploader({});
  constructor(
    private localStorageService: LocalStorageService,
  ) { }


  ngOnInit() {

  }

  ngAfterViewInit() {
    this.options['authToken'] = 'Bearer ' + this.localStorageService.retrieve('token')
    this.options['method'] = 'POST'
    this.options['url'] = environment.api + environment.version + '/banners',
    this.uploader.setOptions(this.options);
    this.uploader.onAfterAddingFile = (item => {
       item.withCredentials = false;
    });
 }
}
