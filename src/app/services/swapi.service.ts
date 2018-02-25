import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { FeatureService } from './feature.service';


@Injectable()
export class SwapiService {

  private _hasToggle: boolean;

  private baseUrl = 'https://swapi.co/api';

  constructor(private http: HttpClient) {}

  public get hasToggle(): boolean {
    return this._hasToggle;
  }

  public set hasToggle(value: boolean) {
    this._hasToggle = value;
  }

  getCharacters(url?: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    const path = url ? url : `${this.baseUrl}/people/?search`;
    return this.http
      .get(path, { ...headers });
  }

  getCharacterByName(url?: string, name?: string): Observable<any> {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    const path = url ? url : `${this.baseUrl}/people/?search=${name}`;
    return this.http
      .get(path, { ...headers });
  }

  getCharacterById(characterId: string) {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    const path = `${this.baseUrl}api/people`;
    return this.http
      .get(`${this.baseUrl}/api/people${characterId}`, { ...headers });
  }
}

