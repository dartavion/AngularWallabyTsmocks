import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EgHttpService } from './eg-http.service';
import * as data from '../../api/json/star-wars.json';

describe('EgHttpService', () => {
  let service: EgHttpService,
    http: HttpClient,
    backend: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [EgHttpService]
    });
    service = TestBed.get(EgHttpService);
    http = TestBed.get(HttpClient);
    backend = TestBed.get(HttpTestingController);
  });

  // Basic example fake example
  it('should respond with fake data', () => {
    http.get('/foo/bar').subscribe((next) => {
      expect(next).toEqual({baz: '123'});
    });

    backend.match({
      url: '/foo/bar',
      method: 'GET'
    })[0].flush({baz: '123'});
  });

  it('is a real example', () => {
    service
      .get();

    service
      .getNames()
      .subscribe((next) => {
        expect(next).toEqual([
          'Luke Skywalker',
          'C-3PO',
          'R2-D2',
          'Darth Vader',
          'Leia Organa',
          'Owen Lars',
          'Beru Whitesun lars',
          'R5-D4',
          'Biggs Darklighter',
          'Obi-Wan Kenobi' ]);
      });

    service
      .getGenders('male')
      .subscribe(next => expect(next).toEqual(5));
    service
      .getGenders('female')
      .subscribe(next => expect(next).toEqual(2));
    service
      .getGenders('n/a')
      .subscribe(next => expect(next).toEqual(3));
    service
      .getCharacter('Luke Skywalker')
      .subscribe(next => expect(next.name).toEqual('Luke Skywalker'));

    backend
      .match({
        url: 'https://swapi.co/api',
        method: 'GET'
      })[0]
      .flush(data);
  });
});
