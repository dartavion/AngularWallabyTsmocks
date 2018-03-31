import { CharacterState, getCharactersState } from '../reducers';
import { createSelector } from '@ngrx/store';

import * as fromRoot from 'app/store';
import * as fromCharactersFeature from '../reducers';
import * as fromCharacters from '../reducers/characters.reducer';
import { Character } from '../../../../models/star-wars.model';

export const getCharacterState =
  createSelector(fromCharactersFeature.getCharactersState, (state: CharacterState) => state.characters);

export const getCharactersEntities =
  createSelector(getCharacterState, fromCharacters.getCharactersEntities);

export const getSelectedCharacter =
  createSelector(
    getCharactersEntities,
    fromRoot.getRouterState,
    (entites, router): Character => {
      return router.state && entites[router.state.params.characterId];
    }
  );
export const getAllCharacters = createSelector(getCharactersEntities, (entities) => {
  return Object.keys(entities).map(name => entities[name]);
});
export const getAllCharactersLoaded =
  createSelector(getCharacterState, fromCharacters.getCharactersLoaded);
export const getAllCharactersLoading =
  createSelector(getCharacterState, fromCharacters.getCharactersLoading);
