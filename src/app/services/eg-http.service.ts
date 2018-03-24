import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/toArray';

@Injectable()
export class EgHttpService {
  private baseUrl = 'https://swapi.co/api';
  constructor(private http: HttpClient) { }

  private static getFirstName(data) {
    return data.map(person => person.name.first);
  }

  get() {
    return this.http
      .get(this.baseUrl)
      .concatMap(EgHttpService.getFirstName)
      .toArray();
  }
}
