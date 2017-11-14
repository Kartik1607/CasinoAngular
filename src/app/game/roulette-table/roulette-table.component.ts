import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roulette-table',
  templateUrl: './roulette-table.component.html',
  styleUrls: ['./roulette-table.component.css']
})
export class RouletteTableComponent implements OnInit {

  chipCount: number[];
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
  }

  ngOnInit() {
  }

  minusOne(index) {
    if (this.chipCount[index] === 0) {
      return;
    }
    this.chipCount[index]--;
  }

  plusOne(index) {
    this.chipCount[index]++;
  }

}
