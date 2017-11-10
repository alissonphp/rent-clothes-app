import { Component, OnInit } from '@angular/core';
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
    pass: null
  }

  private errorMsg: any;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.validate()
    console.log(this.user)
    this.loginService.postLogin(this.user).subscribe(
      res => console.log('ok'),
      error => this.errorMsg = error
    )
  }

  storeToken(token: any) {
    console.log(token);
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
