import { Component, OnInit } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  cardAnimation = false;
  currentCard: any;
  game:Game;
  constructor(){}

  ngOnInit(): void {
    this.newGame();
  }
  newGame(){
    this.game = new Game();
    console.log(this.game)
  }
  takeCard() {
    if (!this.cardAnimation) {
      
      this.currentCard = this.game.stack.pop();
      this.cardAnimation = true;
      
    setTimeout(() => {
      this.cardAnimation = false;
    }, 1500);
  }
  }
}
