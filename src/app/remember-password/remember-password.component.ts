import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login/login.service';

declare var $: any

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.scss'],
  providers: [LoginService]
})
export class RememberPasswordComponent implements OnInit {

  user: any = {
    email: ''
  }

  loading = 0
  success = 0

  constructor(private loginService: LoginService ) { }

  ngOnInit() {
  }

  onSubmit() {
    this.loading = 1
    this.loginService.remember(this.user).subscribe(
      res => {
        this.successMsg('success', 'Vamos enviar um e-mail pra você em instantes!', 'ti-check-box')
        this.loading = 0
        this.success = 1
      },
      error => {
        this.successMsg('danger', 'Ops! Houve um problema: "' + error + '"', 'ti-alert')
        this.loading = 0
      }
    )
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

}
