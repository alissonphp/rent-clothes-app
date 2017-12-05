import { Component, OnInit } from '@angular/core';

import { BannersService } from './../../banners/banners.service';
import { environment } from './../../../environments/environment';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

declare var $: any

@Component({
  selector: 'app-slider-images',
  templateUrl: './slider-images.component.html',
  styleUrls: ['./slider-images.component.css'],
  providers: [BannersService]
})
export class SliderImagesComponent implements OnInit {

  banners
  errorMsg
  baseUrl

  constructor(private bannerService: BannersService) {
    this.baseUrl = environment.api + 'drive/banners/'
  }

  ngOnInit() {
    this.setAll()
  }

  setAll() {
    this.bannerService.actives().subscribe(
      res => {
        this.banners = res
      },
      error => this.errorMsg = error
    )
  }
}
