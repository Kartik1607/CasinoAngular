import {Routes} from '@angular/router';
import {RouletteTableComponent} from '../game/roulette-table/roulette-table.component';
import {LoginComponent} from '../login/login.component';

export const appRoutes: Routes = [
  { path: 'game', component:  RouletteTableComponent},
  { path: '**', component: LoginComponent}
];
