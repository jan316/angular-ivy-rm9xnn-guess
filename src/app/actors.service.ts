import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ActorsData } from './actors';

@Injectable()
export class ActorsService {
  private _url: string = 'https://tyll.tech/actors.json';

  constructor(private http: HttpClient) {}

  getActors(): Observable<ActorsData[]> {
    return this.http.get<ActorsData[]>(this._url);
  }
}
