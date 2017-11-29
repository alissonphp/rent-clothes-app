import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'app/items/items.service';

@Component({
  selector: 'app-news-itens',
  templateUrl: './news-itens.component.html',
  styleUrls: ['./news-itens.component.css'],
  providers: [ItemsService]
})
export class NewsItensComponent implements OnInit {

  private news: any
  errorMsg

  constructor(private itemService: ItemsService) { }

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
