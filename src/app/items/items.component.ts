import { Component, OnInit } from '@angular/core';
import { ItemsService } from 'app/items/items.service';
import { Subject } from 'rxjs/Rx';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
  providers: [ ItemsService ]
})
export class ItemsComponent implements OnInit {

  items: any = [];
  errorMsg: any;
  dtOptions: any = {};
  dtTrigger = new Subject();

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 15,
      dom: 'Bfrtip',
      language: {
        url: '//cdn.datatables.net/plug-ins/1.10.16/i18n/Portuguese-Brasil.json'
      },
      buttons: [
        'print',
        'excel',
      ]
    };
    this.listAllItems();
  }

  listAllItems() {
    this.itemsService.all().subscribe(
      res => { 
        this.items = res 
        this.dtTrigger.next();
      },
      error => this.errorMsg = error
    )
  }

}
