import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EgHttpService } from './eg-http.service';

const data = [
  {
    name: {
      first: 'ted',
      last: 'smith',
      title: 'something'
    },
    address: {
      street: 'Test',
      city: 'Rochester',
      state: 'NY',
      zip: '12121'
    },
    phone: {
      home: '1231231231',
      work: '2323232321'
    }
  },
  {
    name: {
      first: 'Mike',
      last: 'Merny',
      title: 'something'
    },
    address: {
      street: 'Other',
      city: 'Rochester',
      state: 'NY',
      zip: '34334'
    },
    phone: {
      home: '1231231231',
      work: '2323232321'
    }
  }
];
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
      .get()
      .subscribe((next) => {
        expect(next).toEqual(['ted', 'Mike']);
      });
    backend
      .match({
        url: 'https://swapi.co/api',
        method: 'GET'
      })[0]
      .flush(data);
  });
});
