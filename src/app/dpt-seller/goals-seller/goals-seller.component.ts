import { Component, OnInit } from '@angular/core';
import { UsersService } from 'app/users/users.service';

@Component({
  selector: 'app-goals-seller',
  templateUrl: './goals-seller.component.html',
  styleUrls: ['./goals-seller.component.css'],
  providers: [UsersService]
})
export class GoalsSellerComponent implements OnInit {

  goals: any

  constructor(private userService: UsersService) { }

  ngOnInit() {

    this.userService.goalSeller().subscribe(
      res => this.goals = res,
      error => console.log(error)
    )

  }

}
