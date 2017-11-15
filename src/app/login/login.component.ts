import { Component, OnInit } from '@angular/core';
import {GameServiceService} from '../services/game-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId: number;
  loginStatus: boolean;


  constructor(private gameService: GameServiceService, private router: Router) {
    if (localStorage.getItem('LOGIN')) {
      router.navigate(['/game']);
    }
    this.loginStatus = true;
  }

  ngOnInit() {
  }

  loginUser() {
    this.gameService.getUserById(this.userId)
      .subscribe((res) => {
        if (res.data !== null) {
          this.loginStatus = true;
          this.updateLoginStorage(true, res.data.uid);
          this.router.navigate(['/game']);
        } else {
          this.loginStatus = false;
          this.updateLoginStorage(false);
        }
      });
  }

  updateLoginStorage(loginStatus: boolean, userId?: number) {
    if (this.loginStatus) {
      localStorage.setItem('LOGIN', `${loginStatus}`);
      localStorage.setItem('UID', `${userId}`);
    } else {
      localStorage.removeItem('LOGIN');
      localStorage.removeItem('UID');
    }
  }
}

