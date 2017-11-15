import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouletteTableComponent } from './game/roulette-table/roulette-table.component';
import { ScoreComponent } from './game/roulette-table/score/score.component';
import { UserComponent } from './game/user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './common/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RouletteTableComponent,
    ScoreComponent,
    UserComponent,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
