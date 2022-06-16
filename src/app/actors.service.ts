import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActorsData } from './actors';

@Injectable()
export class ActorsService {
  private _url: string = './assets/actors.json';

  constructor(private http: HttpClient) {}

  getActors(): Observable<ActorsData[]> {
    return this.http.get<ActorsData[]>(this._url);
  }
}
