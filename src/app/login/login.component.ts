import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Ng2Webstorage, LocalStorageService } from 'ngx-webstorage';

import { LoginService } from './login.service';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ LoginService ]
})
export class LoginComponent implements OnInit {

  user: any = {
    email: null,
    password: null
  }

  private errorMsg: any;

  constructor(private loginService: LoginService, private storage: LocalStorageService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.validate()
    console.log(this.user)
    this.loginService.login(this.user).subscribe(
      res => this.storeToken(res),
      error => this.errorMsg = error
    )
  }

  storeToken(data: any) {
    this.storage.store('token',data.token)
    this.storage.store('name',data.user.name)
    this.storage.store('email',data.user.email)
    this.redirectTo(data.user.roles[0].role)
  }

  redirectTo(role: any) {
    if(role == 'admin') {
      this.router.navigate(['/dpt-admin/dashboard'])
    }
  }

  validate() {
    if (this.user.email === null || this.user.pass === null) {
      $.notify({
        icon: 'ti-info-alt',
        message: '<span class="text-center">Informe suas credenciais de acesso!</span>'
      }, {
          type: 'danger',
          timer: 1500,
          placement: {
              from: 'top',
              align: 'center'
          }
      });
      return false
    }
  }

}
