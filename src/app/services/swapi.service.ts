import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/observable/throw';

import { Characters } from '../models/star-wars.model';


@Injectable()
export class SwapiService {

  private baseUrl = 'https://swapi.co/api';

  constructor(private http: HttpClient) { }

  getCharacters(url?: string): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const path = url ? url : `${this.baseUrl}/people/?search`;
    return this.http
      .get<Characters[]>(path, {...headers})
      .pipe(catchError((error: any) => Observable.throw(error.json())));
      // .get(path, {...headers});
  }

  getCharacter(characterId: string) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const path = `${this.baseUrl}api/people`;
    return this.http
      .get(`${this.baseUrl}/api/people${characterId}`, {...headers});
  }
}

