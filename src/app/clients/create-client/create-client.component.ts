import { Component, OnInit } from '@angular/core';

import { Client } from './../client';
import { ClientsService } from './../clients.service';

declare var $: any

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.css'],
  providers: [ClientsService]
})
export class CreateClientComponent implements OnInit {

  client: any = {}

  constructor(private clientService: ClientsService) { }

  ngOnInit() {
  }

  store() {
    this.clientService.save(this.client).subscribe(
      res => {
        this.successMsg('success', 'Cliente cadastrado com sucesso!', 'ti-check-box')
        this.client = {}
      },
      error => {
        this.successMsg('danger', 'Houve um problema: ' + error, 'ti-alert')
        console.log(error)
      },
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
      error => console.log(error),
    )
  }

}
