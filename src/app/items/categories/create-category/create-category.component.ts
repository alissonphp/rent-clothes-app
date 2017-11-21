import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'app/items/categories/categories.service';

declare var $: any

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
  providers: [CategoriesService]
})
export class CreateCategoryComponent implements OnInit {

  label: string
  errorMsg: any

  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
  }

  store() {
    // console.log(this.label);
    this.categoryService.save({label: this.label}).subscribe(
      res => this.successMsg(res),
      error => this.errorMsg = error
    )
  }

  successMsg(data) {
    $.notify({
      icon: 'ti-check-box',
      message: '<span class="text-center">Nova categoria "' + data.label + '" registrada!</span>'
    }, {
        type: 'success',
        timer: 1500,
        placement: {
            from: 'top',
            align: 'center'
        }
    });

    this.label = ''
  }

}
