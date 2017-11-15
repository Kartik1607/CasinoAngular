import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GameServiceService {
  private API_URL = 'http://localhost:8000/api'


  constructor(private http: Http) { }

  getUserById(userId) {
    return this.http.get(`${this.API_URL}/users/${userId}`)
      .map(res => res.json());
  }

  placeBet(userId, bet) {
    const betData = {
      'userId': userId,
      'casinoTable': {
        'numbers': bet
      }
    };
    return this.http.put(`${this.API_URL}/games/`, betData);
  }
}
