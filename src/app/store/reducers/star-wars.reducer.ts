import * as fromStarWars from '../actions/star-wars.actions';
import { Characters } from '../../models/star-wars.model';

export interface StarWarsState {
  data: Characters[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: StarWarsState = {
  data: [],
  loaded: false,
  loading: false,
};

export function reducer(
  state = initialState,
  action: fromStarWars.StarWarsAction
): StarWarsState {
  switch (action.type) {
    case fromStarWars.LOAD_STAR_WARS: {
      return {
        ...state,
        loading: true,
      };
    }

    case fromStarWars.LOAD_STAR_WARS_SUCCESS: {
      return {
        ...state,
        loading: false,
        loaded: true,
      };
    }

    case fromStarWars.LOAD_STAR_WARS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
      };
    }
  }

  return state;
}
