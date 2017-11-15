import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() userName: string;
  @Input() userBalance: number;
  @Input() userBet: number;

  constructor() { }

  ngOnInit() {
  }

}
