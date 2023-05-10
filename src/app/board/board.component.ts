import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})

export class BoardComponent implements OnInit {
  squares: any[] = Array(9).fill(null);
  xIsNext: boolean = true;
  winner: string | null = null;

  ngOnInit(): void {
      this.newGame();
  }

  newGame(){
    this.squares = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true 
  }

  get player() {
    return this.xIsNext ? 'X' : 'O';
  }


}
