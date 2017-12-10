import { Component, OnInit } from '@angular/core';

import { GoalsService } from './../goals.service';

declare var $: any
declare var moment: any

@Component({
  selector: 'app-goals-create',
  templateUrl: './goals-create.component.html',
  styleUrls: ['./goals-create.component.css'],
  providers: [GoalsService]
})
export class GoalsCreateComponent implements OnInit {

  goal: any = {
    month: 1,
    year: moment().format('YYYY'),
    goal_seller: '0.00',
    commission_seller: '0.00',
    goal_store: '0.00',
    commission_store: '0.00'
  }

  constructor(private goalService: GoalsService) { }

  ngOnInit() {
  }

  store() {
    this.goalService.save(this.goal).subscribe(
      res => {
        this.successMsg('success', 'Meta cadastrada com sucesso!', 'ti-check-box')
        this.goal = {}
      },
      error => {
        this.successMsg('danger', 'Houve um problema: ' + error, 'ti-alert')
        console.log(error)
      },
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
