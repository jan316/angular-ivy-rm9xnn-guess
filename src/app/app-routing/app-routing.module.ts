import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameOverComponent } from '../game-over/game-over.component';
import { GameComponent } from '../game/game.component';

const routes: Routes = [
  {path: 'game', component: GameComponent},
  {path: 'game-over', component: GameOverComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule],

 
})
export class AppRoutingModule { }
export const routingComponents = [ GameComponent, GameOverComponent ]

