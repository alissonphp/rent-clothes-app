import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'app/items/items.service';
import { environment } from 'environments/environment';
declare var $: any
@Component({
  selector: 'app-news-itens',
  templateUrl: './news-itens.component.html',
  styleUrls: ['./news-itens.component.css'],
  providers: [ItemsService]
})
export class NewsItensComponent implements OnInit {

  public news: any
  errorMsg
  baseUrl

  constructor(private itemService: ItemsService) {
    this.baseUrl = environment.api + 'drive/products/'
  }

  ngOnInit() {
    this.getNews()
  }

  getNews() {
    this.itemService.news().subscribe(
      res => this.news = res,
      error => this.errorMsg = error
    )
  }
}
