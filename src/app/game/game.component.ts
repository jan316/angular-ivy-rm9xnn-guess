import { Component, inject, OnInit } from '@angular/core';
import { ActorsData } from '../actors';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  public actors: ActorsData[];

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
  d: number = 0;
  e: number = 0;
  f: number = 0;

  status: string = 'is-link';
  status2: string = 'is-link';

  clickEvent() {
    this.status = 'is-danger';
  }

  clickEvent2() {
    this.status2 = 'is-danger';
  }

  onGoClick() {
    let arr = [];
    while (arr.length < 3) {
      let r = Math.floor(Math.random() * this.actors.length - 1) + 1;
      if (arr.indexOf(r) === -1) arr.push(r);
    }

    let place = [];
    while (place.length < 3) {
      let r = Math.floor(Math.random() * 3) + 1;
      if (place.indexOf(r) === -1) place.push(r);
    }

    this.a = arr[0];
    this.b = arr[1];
    this.c = arr[2];
    this.d = place[0];
    this.e = place[1];
    this.f = place[2];

    console.log(this.a, this.b, this.c);
    console.log(this.d, this.e, this.f);

    this.count = this.count + 1;
    console.log(this.count);

    this.status = 'is-link';
    this.status2 = 'is-link';
  }
}
