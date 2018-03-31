import { Injectable } from '@angular/core';
import { Characters } from './character';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class CharacterService extends Characters {
  constructor(private http: HttpClient) {
    super();
  }

  getCharacters(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this
      .http
      .get(`${this.baseUrl}/people/?search`, {headers: headers})
      .pipe(
        // tap(data => console.log(data)),
        map(characters => characters)
      );
  }

  getPokiCharacters(): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this
      .http
      .get(`${this.pokiUrl}/pokemon`, {headers: headers})
      .pipe(
        // tap(data => console.log(data)),
        map(characters => characters)
      );
  }
}
