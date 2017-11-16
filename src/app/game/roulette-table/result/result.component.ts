import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Router} from "@angular/router";
import {GameServiceService} from "../../../services/game-service.service";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  amountWon: number;
  amountBetted: number;
  randomNumber: number;
  @Input() userId: number;
  @Input() chipCount: number[];
  @Output() onRetry: EventEmitter<boolean> = new EventEmitter();

  constructor(private router: Router, private gameService: GameServiceService) { }

  ngOnInit() {
    this.gameService.placeBet(this.userId, this.chipCount)
      .subscribe(data => {
        if (! data.ok) {
          console.log('Something went wrong');
          return;
        }

        const response = data.json();
        if (response.error) {
          console.log(response.error);
          return;
        }
        console.log(response);
        this.amountWon = response.data.amountWon;
        this.amountBetted = response.data.amountBetted;
        this.randomNumber = response.data.randomNumber;
      });

  }

  onLogout() {
    localStorage.removeItem('LOGIN');
    this.router.navigate(['/']);
  }
}
