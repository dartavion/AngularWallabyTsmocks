import * as fromCharacters from '../actions/characters.actions';
import { Character } from 'app/models/star-wars.model';

export interface CharactersState {
  entities: {[name: string]: Character};
  loaded: boolean;
  loading: boolean;
}

export const initialState: CharactersState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(state = initialState,
                        action: fromCharacters.CharacterActions): CharactersState {

  switch (action.type) {
    case fromCharacters.CharacterActionTypes.LoadCharacters: {
      return {
        ...state,
        loading: true
      };
    }
    case fromCharacters.CharacterActionTypes.LoadCharactersSuccess: {
      const characters = action.payload;
      const entities = characters.reduce((ents: {[name: string]: Character}, character: Character) => {
        return {
          ...ents,
          [character.name]: character
        };
      }, {
        ...state.entities
      });
      return {
        ...state,
        loading: false,
        loaded: true,
        entities
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
export const getCharactersEntities = (state: CharactersState) => state.entities;


