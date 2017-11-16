import { Component, OnInit } from '@angular/core';
import {GameServiceService} from '../../services/game-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-roulette-table',
  templateUrl: './roulette-table.component.html',
  styleUrls: ['./roulette-table.component.css']
})
export class RouletteTableComponent implements OnInit {

  chipCount: number[];
  userBet: number;
  user: {
    id: number,
    name: string,
    contactNumber: number,
    dateOfBirth: any,
    emailAddress: string,
    idProofLocation: string,
    balanceAmount: number,
    blockedAmount: number,
    uid: number
  };
  private userId: string;
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
  userBalance: number;
  isPlacingBet = true;
  resultAmountWon: number;
  resultAmountBetted: number;
  randomNumber: number;

  constructor(private gameService: GameServiceService, private router: Router) {
    if (localStorage.getItem('LOGIN') ) {
      this.userId = localStorage.getItem('UID');
    } else {
      router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.resetGame();
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

  placeBet() {
    this.isPlacingBet = !this.isPlacingBet;
  }

  resetGame() {
    this.isPlacingBet = true;
    this.user = null;
    this.chipCount  = [0, 0, 0, 0, 0, 0, 0, 0];
    this.userBet = 0;
    this.gameService.getUserById(this.userId)
      .subscribe(item => {
        if (item.data !== null) {
          this.user = item.data;
          this.userBalance = this.user.balanceAmount;
        } else {
          localStorage.removeItem('LOGIN');
          this.router.navigate(['/']);
        }
      });
  }
}
