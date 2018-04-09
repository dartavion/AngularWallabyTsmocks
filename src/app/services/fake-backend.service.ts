import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/materialize';
import 'rxjs/add/operator/dematerialize';

import * as startWarsCharactersJson from '../../api/json/star-wars.json';

@Injectable()
export class FakeBackendInterceptorService implements HttpInterceptor {
  // http://jasonwatmore.com/post/2017/12/15/angular-5-mock-backend-example-for-backendless-development
  // https://github.com/cornflourblue/angular2-registration-login-example-cli
  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const body = {
      tinker: 'bell'
    };
    return Observable.of(null).mergeMap(() => {
      if (request.url.endsWith('/api/people/?search') && request.method === 'GET') {
        return Observable.of(new HttpResponse({ status: 200, body: startWarsCharactersJson }));
      }
      return [];
    })
    .materialize()
    .delay(500)
    .dematerialize();
  }
}

export let FakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptorService,
  multi: true
};
