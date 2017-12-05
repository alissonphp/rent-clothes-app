import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'app/items/items.service';

@Component({
  selector: 'app-item-consult',
  templateUrl: './item-consult.component.html',
  styleUrls: ['./item-consult.component.css'],
  providers: [ItemsService]
})
export class ItemConsultComponent implements OnInit {

  searchItem
  resItens: any
  errorMsg
  loadItens = false

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
  }

  getSearchItem() {
    this.loadItens = true
    this.itemsService.search(this.searchItem).subscribe(
      res => {
        this.resItens = res
        this.loadItens = false
      },
      error => this.errorMsg = error
    )
  }

}
