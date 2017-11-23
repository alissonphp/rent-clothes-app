import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ClientsService } from 'app/clients/clients.service';

declare var $: any

@Component({
  selector: 'app-updade-client',
  templateUrl: './updade-client.component.html',
  styleUrls: ['./updade-client.component.css'],
  providers: [ClientsService]
})
export class UpdadeClientComponent implements OnInit {

  refId: number
  client: any = {}
  errorMsg: any

  constructor(private clientService: ClientsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.refId = params['id'];
    });

    this.show()
  }
  show() {
    this.clientService.show(this.refId).subscribe(
      res => this.client = res,
      error => this.errorMsg = error
    )
  }
  update() {
    this.clientService.update(this.client).subscribe(
      res => this.successMsg('success', 'Dados do cliente atualizados!', 'ti-check-box'),
      error => {
        this.successMsg('danger', 'Houve um problema: ' + error, 'ti-alert')
        this.errorMsg = error
      }
    )
  }
  getCep() {
    this.clientService.cep(this.client.zipcode).subscribe(
      res => {
        this.client.address = res.logradouro
        this.client.uf = res.uf
        this.client.city = res.localidade
        this.client.uf = res.uf
        this.client.complement = res.complement
        this.client.neighborhood = res.bairro
      },
      error => console.log(error)
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
