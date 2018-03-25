import { Action } from '@ngrx/store';
import { Character } from '../../models/star-wars.model';


export interface CharactersState {
  data: Character[];
}

export const initialState: CharactersState = {
  data: []
};

export function reducer(state = initialState, action: Action): CharactersState {
  switch (action.type) {

    default:
      return state;
  }
}
