import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { BannersService } from 'app/banners/banners.service';
import { environment } from 'environments/environment';

declare var $: any

@Component({
  selector: 'app-update-banner',
  templateUrl: './update-banner.component.html',
  styleUrls: ['./update-banner.component.css'],
  providers: [BannersService]
})
export class UpdateBannerComponent implements OnInit {

  refId: number
  banner: any = {}
  errorMsg: any
  baseUrlImg = environment.api + 'drive/banners/'

  constructor(private bannerService: BannersService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.refId = params['id'];
    });

    this.show()
  }
  show() {
    this.bannerService.show(this.refId).subscribe(
      res => this.banner = res,
      error => this.errorMsg = error
    )
  }
  update() {
    this.bannerService.update(this.banner).subscribe(
      res => this.successMsg('success', 'Dados do banner atualizados!', 'ti-check-box'),
      error => {
        this.successMsg('danger', 'Houve um problema: ' + error, 'ti-alert')
        this.errorMsg = error
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
