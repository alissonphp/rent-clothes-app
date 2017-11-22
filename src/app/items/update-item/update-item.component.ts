import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ItemsService } from 'app/items/items.service';
import { CategoriesService } from 'app/items/categories/categories.service';

declare var $: any

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.css'],
  providers: [ItemsService, CategoriesService]
})
export class UpdateItemComponent implements OnInit {

  item: any = {}
  refId
  errorMsg: any
  categories: any

  constructor(private itemService: ItemsService, private categoryService: CategoriesService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.refId = params['id'];
    });
    this.getItem()
    this.getCategories()
  }

  getItem() {
    this.itemService.show(this.refId).subscribe(
      res => this.item = res,
      error => this.errorMsg = error
    )
  }
  getCategories() {
    this.categoryService.all().subscribe(
      res => this.categories = res,
      error => this.errorMsg = error
    )
  }
  update() {
    this.itemService.update(this.item).subscribe(
      res => {
        this.item = res
        this.successMsg()
      },
      error => this.errorMsg = error
    )
  }

  successMsg() {
    $.notify({
      icon: 'ti-check-box',
      message: '<span class="text-center">Item atualizado com sucesso!</span>'
    }, {
        type: 'success',
        timer: 1500,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
  }

}
