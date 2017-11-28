import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../items/categories/categories.service';

@Component({
  selector: 'app-nav-header-bar',
  templateUrl: './nav-header-bar.component.html',
  styleUrls: ['./nav-header-bar.component.css', 
  '../../../assets/seiko/css/style.css', 
  '../../../assets/seiko/css/megamenu.css',
  '../../../assets/seiko/fonts/icomoon-reg/style.css'],
  providers: [CategoriesService]
})
export class NavHeaderBarComponent implements OnInit {

  categories = []
  errorMsg

  constructor(private categoryService: CategoriesService) { }

  ngOnInit() {
    this.setAll()
  }

  setAll() {
    this.categoryService.all().subscribe(
      res => this.categories = res,
      error => this.errorMsg = error
    )
  }

}
