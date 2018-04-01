import { ActionReducerMap, createFeatureSelector } from '@ngrx/store';

import * as fromCharacters from './characters.reducer';
import * as fromStarShips from './star-ship.reducer';

export interface CharacterState {
  characters: fromCharacters.CharactersState;
  starShips: fromStarShips.StarShipState;
}

export const reducers: ActionReducerMap<CharacterState> = {
  characters: fromCharacters.reducer,
  starShips: fromStarShips.reducer
};

export const getCharactersState =
  createFeatureSelector<CharacterState>('characters');
