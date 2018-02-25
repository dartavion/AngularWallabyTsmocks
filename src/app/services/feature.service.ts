import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class FeatureService {

  constructor() { }

  setToggle() {
    window.localStorage.setItem('star-wars', 'true');
  }

  getToggle() {
    // to simulate obserable service
    return Observable.of([window.localStorage.getItem('star-wars')]);
  }

  deleteToggle() {
    window.localStorage.removeItem('star-wars');
  }
}
