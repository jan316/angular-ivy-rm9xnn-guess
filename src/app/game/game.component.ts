import { Component, OnInit } from '@angular/core';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  public actors: any = [];

  constructor(private _actorsService: ActorsService) {}

  ngOnInit() {
    this._actorsService.getActors().subscribe((data) => (this.actors = data));
    console.log(this.actors);
  }

  arr: Array<number> = [0, 0, 0];
  count: number = 0;
  score: number = 0;
  a: number = 0;
  b: number = 0;
  c: number = 0;

  onGoClick() {
    let arr = [];
    while (arr.length < 3) {
      let r = Math.floor(Math.random() * this.actors.length - 1) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }

    this.a = arr[0];
    this.b = arr[1];
    this.c = arr[2];

    console.log(this.a, this.b, this.c);

    let ul: any = document.querySelector('ul');
    for (let i = ul.children.length; i >= 0; i--) {
      ul.appendChild(ul.children[(Math.random() * i) | 0]);
    }

    this.count = this.count + 1;
    console.log(this.count);
  }

  onRestartClick() {
    window.location.reload();
  }
}
