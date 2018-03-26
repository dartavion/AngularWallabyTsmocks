import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromCharacters from './characters.reducer';

export interface CharacterState {
  characters: fromCharacters.CharactersState;
}

export const reducers: ActionReducerMap<CharacterState> = {
  characters: fromCharacters.reducer
};

export const getCharactersState =
  createFeatureSelector<CharacterState>('characters');

export const getCharacterState =
  createSelector(getCharactersState, (state: CharacterState) => state.characters);

export const getAllCharacters =
  createSelector(getCharacterState, fromCharacters.getCharacters);
export const getAllCharactersLoaded =
  createSelector(getCharacterState, fromCharacters.getCharactersLoaded);
export const getAllCharactersLoding =
  createSelector(getCharacterState, fromCharacters.getCharactersLoading);
