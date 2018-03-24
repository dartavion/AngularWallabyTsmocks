import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/toArray';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class EgHttpService {
  private baseUrl = 'https://swapi.co/api';
  private characters = new Subject<any>();
  public characters$ = this.characters.asObservable();

  constructor(private http: HttpClient) { }

  getNames(): Observable {
    return this
      .characters$
      .concatMap(characters =>
        Observable
          .of(characters.map(character => character.name)));
  }

  getGenders(gender: string): Observable {
    return this
      .characters$
      .concatMap(characters =>
        Observable
          .of(characters.filter(character => character.gender === gender).length));
  }

  getCharacter(character: string): Observable {
    return this
      .characters$
      .switchMap(data => data)
      .find(creature => creature.name === character);
  }

  get() {
    return this.http
      .get(this.baseUrl)
      .subscribe(data => this.characters.next(data.results));
  }
}
