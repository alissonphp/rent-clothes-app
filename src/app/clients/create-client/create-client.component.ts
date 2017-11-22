import { Component, OnInit } from '@angular/core';

import { Client } from './../client';
import { ClientsService } from './../clients.service';



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

  getCep() {
    this.clientService.cep(this.client.zipcode).subscribe(
      res => {
        this.client.address = res.logradouro
        this.client.uf = res.uf
        this.client.city = res.uf
        this.client.uf = res.localidade
        this.client.complement = res.complement
        this.client.neighborhood = res.bairro
      },
      error => console.log(error),
    )
  }

}
