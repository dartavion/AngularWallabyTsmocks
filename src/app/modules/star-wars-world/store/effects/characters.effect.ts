import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError, tap } from 'rxjs/operators';

import * as characterActions from '../actions';
import { CharacterService } from '../../services/character.service';
import { of } from 'rxjs/observable/of';

@Injectable()
export class CharactersEffects {
  constructor(
    private characterService: CharacterService,
    private actions$: Actions) {
  }

  @Effect()
  loadCharacters$ = this.actions$
    .ofType(characterActions.CharacterActionTypes.LoadCharacters)
    .pipe(
      switchMap(() => {
        return this.characterService
          .getCharacters()
          .pipe(
            // tap(d => console.log('CHECK IT OUT::::::', d.results)),
            map(data => new characterActions.LoadCharactersSuccess(data.results)),
            catchError(error => of(new characterActions.LoadCharactersFail(error)))
          );
      })
    );
}
