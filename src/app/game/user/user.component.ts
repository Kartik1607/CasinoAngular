import {
  Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges,
  ViewChild
} from '@angular/core';

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
  constructor() { }

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
}
