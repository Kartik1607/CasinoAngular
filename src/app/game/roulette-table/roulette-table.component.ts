import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roulette-table',
  templateUrl: './roulette-table.component.html',
  styleUrls: ['./roulette-table.component.css']
})
export class RouletteTableComponent implements OnInit {

  chipCount: number[];
  userBalance: number;
  userBet: number;
  constants = {
    iZERO: 0,
    iFIRST_TWELVE: 1,
    iSECOND_TWELVE: 2,
    iTHIRD_TWELVE: 3,
    iFIRST_EIGHTEEN: 4,
    iLAST_EIGHTEEN: 5,
    iODD: 6,
    iEVEN: 7,
  }

  constructor() {
    this.chipCount  = [0, 0, 0, 0, 0, 0, 0, 0];
    this.userBet = 0;
    this.userBalance = 5000;
  }

  ngOnInit() {
  }

  minusOne(index) {
    if (this.chipCount[index] === 0) {
      return;
    }
    this.userBalance += 500;
    this.userBet -= 500;
    this.chipCount[index]--;
  }

  plusOne(index) {
    if (this.userBalance < 500) {
      //TODO: show error
      return;
    }
    this.userBalance -= 500;
    this.userBet += 500;
    this.chipCount[index]++;
  }

}
