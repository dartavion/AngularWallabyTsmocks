import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { StarShipEffects } from './star-ship.effects';

describe('StarShipService', () => {
  let actions$: Observable<any>;
  let effects: StarShipEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        StarShipEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(StarShipEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
