import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCharacters from './characters.reducer';

export interface CharacterState {
  characters: fromCharacters.CharactersState;
}

export const reducers: ActionReducerMap<CharacterState> = {
  characters: fromCharacters.reducer
};

export const getCharactersState =
  createFeatureSelector<CharacterState>('characters');
