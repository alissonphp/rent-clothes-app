import { Component, OnInit } from '@angular/core';
import { LoginService } from 'app/login/login.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

declare var $: any

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
  providers: [LoginService]
})

export class ResetPasswordComponent implements OnInit {

  user: any = {
    email: ''
  }

  loading = 0
  success = 0
  token: any

  constructor(private loginService: LoginService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.token = params['token'];
    });
    this.checkToken()
  }

  checkToken() {
    this.loading = 1
    this.loginService.token(this.token).subscribe(
      res => {
        this.loading = 0
        this.user = res
      },
      error => {
        this.successMsg('danger', 'Ops! Houve um problema: "' + error + '"', 'ti-alert')
        this.loading = 0
      }
    )
  }

  onSubmit() {
    this.loading = 1
    this.loginService.reset(this.user).subscribe(
      res => {
        this.successMsg('success', 'Senha redefinida com sucesso!', 'ti-check-box')
        this.loading = 0
        this.router.navigate(['/login'])
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
