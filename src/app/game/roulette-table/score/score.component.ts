import {Component, DoCheck, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit, DoCheck {
  data: {
    slot: string,
    chip: number,
    amount: number
  }[];
  private slots = ['0', '1-12', '13-24', '25-36', '1-18', '19-36', 'Odd', 'Even'];
  @Input() bets: number[];

  constructor() {
    this.data = [];
  }

  ngOnInit() {
    this.refreshBets();
  }

  ngOnChanges() {
    this.refreshBets();
  }

  refreshBets() {
    this.data = [];
    this.bets.forEach((bet, index) => {
      this.data.push({
        slot: this.slots[index],
        chip: bet,
        amount: bet * 500
      });
    });
  }

  ngDoCheck(): void {
    this.refreshBets();
  }


}
