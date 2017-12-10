import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from 'ngx-webstorage';

declare var $: any

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private localStorage: LocalStorageService, private router: Router) { }

  ngOnInit() {

    this.localStorage.clear()
    this.router.navigate(['/login'])
    $.notify({
      icon: 'ti-info-alt',
      message: '<span class="text-center">Sessão encerrada!</span>'
    }, {
        type: 'danger',
        timer: 1500,
        placement: {
            from: 'top',
            align: 'center'
        }
    });

  }

}
