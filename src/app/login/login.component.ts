import { Component, OnInit } from '@angular/core';
import {GameServiceService} from '../services/game-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: number;

  constructor(private gameService: GameServiceService) {
  }

  ngOnInit() {
  }

  loginUser() {
    this.gameService.getUserById(this.userId)
      .subscribe((res) => console.log(res));
  }
}

