import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouletteTableComponent } from './game/roulette-table/roulette-table.component';
import { ScoreComponent } from './game/roulette-table/score/score.component';
import { UserComponent } from './game/user/user.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './common/header/header.component';
import {RouterModule} from '@angular/router';
import { appRoutes } from './common/Routes';
import {FormsModule} from '@angular/forms';
import {GameServiceService} from './services/game-service.service';
import {HttpModule} from '@angular/http';

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
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [GameServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
