import { Component, OnInit } from '@angular/core';

import { UsersService } from 'app/users/users.service';
import { FileUploader, FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
import { environment } from 'environments/environment';
import { LocalStorageService } from 'ngx-webstorage';

declare var $: any

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
  providers: [UsersService]
})
export class UserProfileComponent implements OnInit {

  refId: number
  user: any = {}
  errorMsg: any
  options: any = []
  passVerify
  formData = new FormData()
  avatar
  imgUrl = environment.api + 'drive/avatars/'
  showUploader = false
  public uploader: FileUploader = new FileUploader({});

  constructor(private userService: UsersService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.userService.current().subscribe(
      res => this.user = res,
      error => console.log(error)
    )
  }

  ngAfterViewInit() {
    this.options['authToken'] = 'Bearer ' + this.localStorageService.retrieve('token')
    this.options['method'] = 'POST'
    this.options['url'] = environment.api + environment.version + '/users/profile/avatar/upload',
    this.uploader.setOptions(this.options);
    this.uploader.onAfterAddingFile = (item => {
       item.withCredentials = false;
    });

    this.uploader.onCompleteAll = () => {
      console.log('complete');
      this.showUploader = false
      $.notify({
        icon: 'ti-check-box',
        message: '<span class="text-center">Imagem de perfil atualizada!</span>'
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

 update() {
   this.userService.update(this.user).subscribe(
     res => {
        this.successMsg('success', 'Dados atualizados!', 'ti-check-box')
     },
     error => console.log(error)
   )
 }

 uploadImg(opc) {
   this.showUploader = opc
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

}
