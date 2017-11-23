import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/users/users.service';

declare var $: any

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
  providers: [UsersService]
})
export class CreateUserComponent implements OnInit {

  user: any = {}
  errorMsg
  passVerify: any

  constructor(private userService: UsersService) { }

  ngOnInit() {
    console.log(this.user.password)
  }

  store() {
    this.userService.save(this.user).subscribe(
      res => {
        this.successMsg('success', 'Usuário Registrado! <br> login: '
         + this.user.email + '<br> senha: '
         + this.user.password, 'ti-check-box')
        this.user = {}
        this.passVerify = undefined
      },
      error => this.errorMsg = error
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
