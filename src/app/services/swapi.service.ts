import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class SwapiService {

  private baseUrl = 'https://swapi.co/api'

  constructor(private http: HttpClient) { }

  getCharacters(url?: string): Observable<any> {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const path = url ? url : `${this.baseUrl}/people/?search`
    return this.http
      .get(path, {...headers});
  }

  getCharacter(characterId: string) {
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json');
    const path = `${this.baseUrl}api/people`
    return this.http
      .get(`${this.baseUrl}/api/people${characterId}`, {...headers});
  }
}

