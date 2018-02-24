import { TestBed, inject, async, fakeAsync } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { SwapiService } from './swapi.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
function createResponse(body) {
  return Observable.of(
    new Response(new HttpResponse({ body: JSON.stringify(body) }))
  );
}

class MockHttp {
  get() {
    return createResponse([]);
  }
}

const cartItems = [{ product_id: 1, quantity: 10 }, { product_id: 2, quantity: 5 }];
const productItems = [{ id: 1, price: 10, name: 'Test' }, { id: 2, price: 100, name: 'Another Test' }];

describe('SwapiService', () => {
  let service: SwapiService,
    backend: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SwapiService
      ]

    });
    service = TestBed.get(SwapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('gets characters', () => {
    // service.getCharacters()
  });
});
