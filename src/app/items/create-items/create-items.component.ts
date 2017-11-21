import { Component, OnInit } from '@angular/core';
import { ItemsService } from './../items.service';
import { CategoriesService } from 'app/items/categories/categories.service';

declare var $: any

@Component({
  selector: 'app-create-items',
  templateUrl: './create-items.component.html',
  styleUrls: ['./create-items.component.css'],
  providers: [ItemsService, CategoriesService]
})

export class CreateItemsComponent implements OnInit {

  categories: any  = []
  
  item: any = {
    label: '',
    price: '',
    price_unit: '',
    categorys_id: '',
    short_description: '',
    description: '',
    active: 0
  }
  errorMsg: any

  constructor(private itemsService: ItemsService, private categoryService: CategoriesService) { }

  ngOnInit() {
    this.getCategories()
  }

  getCategories() {
    this.categoryService.all().subscribe(
      res => this.categories = res,
      error => this.errorMsg = error
    )
  }
  
  store() {

    this.itemsService.save(this.item).subscribe(
      res => this.successMsg(),
      error => this.errorMsg = error
    )

  }

  successMsg() {
    $.notify({
      icon: 'ti-check-box',
      message: '<span class="text-center">Novo item "' + this.item.label + '" registrado com sucesso!</span>'
    }, {
        type: 'success',
        timer: 1500,
        placement: {
            from: 'top',
            align: 'center'
        }
    });

    this.item = {
      label: '',
      price: '',
      price_unit: '',
      category: '',
      short_description: '',
      description: '',
      active: 0
    }
  }

}
