import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { UsersService } from 'app/users/users.service';

declare var $: any
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css'],
  providers: [UsersService]
})
export class UpdateUserComponent implements OnInit {

  refId: number
  user: any = {}
  errorMsg: any
  passVerify

  constructor(private userService: UsersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.refId = params['id']
      })

      this.show()
  }

  show() {
    this.userService.show(this.refId).subscribe(
      res => {
        this.user = res
        this.user.role = res.roles[0].id
      },
      error => this.errorMsg = error
    )
  }

  update() {
    this.userService.update(this.user).subscribe(
      res => {
        this.successMsg('success', 'Dados do usuário atualizados!', 'ti-check-box')
      },
      error => {
        this.successMsg('danger', 'Ocorreu um problema ao atualizar os dados!', 'ti-alert')
        console.log(error)
      }
    )
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
