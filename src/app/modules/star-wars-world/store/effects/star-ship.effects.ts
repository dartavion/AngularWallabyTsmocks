import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';

import { of } from 'rxjs/observable/of';
import { map, catchError, switchMap } from 'rxjs/operators';
import * as starShipActions from '../actions/star-ship.actions';
import * as fromServices from '../../../../services/swapi.service';

@Injectable()
export class StarShipEffects {

  constructor(private actions$: Actions, private starShipService: fromServices.SwapiService) {}

  @Effect()
  loadStarShips$ = this.actions$
    .ofType(starShipActions.StarShipActionTypes.LoadStarShip)
    .pipe(
      switchMap(() => {
        return this.starShipService
          .getStarShips()
          .pipe(
            map(starShips => {
              console.log(starShips);
              return new starShipActions.LoadStarShipSuccess(starShips.results);
            }),
            catchError(error => of(new starShipActions.LoadStarShipFail(error)))
        );
      })
    );
}
