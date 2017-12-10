import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-remember-password',
  templateUrl: './remember-password.component.html',
  styleUrls: ['./remember-password.component.scss']
})
export class RememberPasswordComponent implements OnInit {

  user: any = {
    email: ''
  }
  constructor() { }

  ngOnInit() {
  }

}
