import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ ItemsService ]
})
export class ListComponent implements OnInit {

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
