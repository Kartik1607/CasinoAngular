import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {GameServiceService} from "../../../services/game-service.service";
declare let $: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  amountWon: number;
  amountBetted: number;
  randomNumber: number;
  isSpinning = true;
  currentRandomNumber: number;
  resultMessage: string;
  @Input() userId: number;
  @Input() chipCount: number[];
  @Output() onRetry: EventEmitter<boolean> = new EventEmitter();

  private currentTime = 0;
  private randomNumberInterval;
  hasResultArrived = false;
  hasUserWon = false;
  @ViewChild('wonAudio') wonAudio;
  @ViewChild('lostAudio') lostAudio;

  constructor(private router: Router, private gameService: GameServiceService) { }

  ngOnInit() {
    this.randomNumber = 0;
    this.randomNumberInterval = setInterval(() => {
      this.currentRandomNumber = Math.floor(Math.random() * (36));
      this.currentTime += 100;
    }, 100);
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
        const timeRequired = 2000 - this.currentTime;
        if (timeRequired > 0) {
          setTimeout(() => {
            clearInterval(this.randomNumberInterval);
            this.showResult();
          }, timeRequired);
        }
      });
  }

  private showResult() {
    this.hasResultArrived = true;
    this.currentRandomNumber = this.randomNumber;
    setTimeout(() => {
      this.isSpinning = false;
      if (this.amountWon > this.amountBetted) {
        this.hasUserWon = true;
        this.wonAudio.nativeElement.play();
        this.resultMessage = 'You win!!';
      }else {
        this.lostAudio.nativeElement.play();
        this.resultMessage = 'Bad luck. Try again!';
      }
      $('#resultModal').modal('show');
    }, 2100);
  }

  onLogout() {
    localStorage.removeItem('LOGIN');
    this.router.navigate(['/']);
  }

  onRetryClicked() {
    $('#resultModal').modal('hide');
    this.onRetry.emit(true);
  }
}
