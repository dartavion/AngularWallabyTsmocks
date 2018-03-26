import * as fromCharacters from '../actions/characters.actions';
import { Character } from '../../../app/models/star-wars.model';

export interface CharactersState {
  data: Character[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: CharactersState = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
    state = initialState,
    action: fromCharacters.CharacterActions
  ): CharactersState {

  switch (action.type) {
    case fromCharacters.CharacterActionTypes.LoadCharacters: {
      return {
        ...state,
        loading: true
      };
    }
    case fromCharacters.CharacterActionTypes.LoadCharactersSuccess: {
      const data = action.payload;
      return {
        ...state,
        loading: false,
        loaded: true,
        data
      };
    }
    case fromCharacters.CharacterActionTypes.LoadCharactersFail: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }
    default:
      return state;
  }
}
export const getCharactersLoading = (state: CharactersState) => state.loading;
export const getCharactersLoaded = (state: CharactersState) => state.loaded;
export const getCharacters = (state: CharactersState) => state.data;


