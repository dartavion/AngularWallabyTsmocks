import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class SwapiService {

  baseUrl: 'https://swapi.co/api/people/1/'

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http
      .get(this.baseUrl);
  }

}
