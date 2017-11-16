import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';
import {Router} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnChanges {

  @Input() userName: string;
  @Input() userBalance: number;
  @Input() userBet: number;
  @Output() playClicked: EventEmitter<boolean> = new EventEmitter();
  isAllowedToPlay: boolean;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.userBet === 0) {
      this.isAllowedToPlay = false;
    } else {
      this.isAllowedToPlay = true;
    }
  }
  onPlayClicked() {
    this.playClicked.emit(true);
  }

  onLogout() {
    localStorage.removeItem('LOGIN');
      this.router.navigate(['/']);
  }
}
