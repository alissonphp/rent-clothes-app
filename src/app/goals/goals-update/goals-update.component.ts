import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { GoalsService } from './../goals.service';

declare var $: any
declare var moment: any

@Component({
  selector: 'app-goals-update',
  templateUrl: './goals-update.component.html',
  styleUrls: ['./goals-update.component.css'],
  providers: [GoalsService]
})
export class GoalsUpdateComponent implements OnInit {

  refId
  goal: any = {
    month: 1,
    year: moment().format('YYYY'),
    goal_seller: '0.00',
    commission_seller: '0.00',
    goal_store: '0.00',
    commission_store: '0.00'
  }

  constructor(private activatedRoute: ActivatedRoute, private goalService: GoalsService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.refId = params['id'];
    });

    this.show()
  }
  show() {
    this.goalService.show(this.refId).subscribe(
      res => this.goal = res,
      error => console.log(error)
    )
  }
  update() {
    this.goalService.update(this.goal).subscribe(
      res => this.successMsg('success', 'Dados do cliente atualizados!', 'ti-check-box'),
      error => {
        this.successMsg('danger', 'Houve um problema: ' + error, 'ti-alert')
        console.log(error)
      }
    )
  }

  successMsg(type, data, icon) {
    $.notify({
      icon: icon,
      message: '<span class="text-center">' + data + '</span>'
    }, {
        type: type,
        timer: 1500,
        placement: {
            from: 'top',
            align: 'center'
        }
    });
  }

}
