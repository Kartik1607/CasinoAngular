import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouletteTableComponent } from './game/roulette-table/roulette-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RouletteTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
