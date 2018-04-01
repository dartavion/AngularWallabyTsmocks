import * as fromStarShips from '../actions/star-ship.actions';
import { StarShip } from '../../../../models/star-ship';


export interface StarShipState {
  entities: { [name: string ]: StarShip};
  loaded: boolean;
  loading: boolean;
}

export const initialState: StarShipState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromStarShips.StarShipActions): StarShipState {
  switch (action.type) {
    case fromStarShips.StarShipActionTypes.LoadStarShip: {
      return {
        ...state,
        loading: true
      };
    }
    case fromStarShips.StarShipActionTypes.LoadStarShipSuccess: {
      const starShips = action.payload;
      const entities = starShips.reduce(
        (ents: {[anme: string]: StarShip}, starShip: StarShip) => {
        return {
          ...ents,
          [starShip.name]: starShip
        };
      }, {...state.entities});
      return {
        ...state,
        loaded: true,
        loading: false,
        entities
      };
    }
    case fromStarShips.StarShipActionTypes.LoadStarShipFail: {
      return {
        ...state,
        loaded: false,
        loading: false
      };
    }
    default:
      return state;
  }
}

export const getStarShipEntites = (state: StarShipState) => state.entities;
export const getStarShipLoaded = (state: StarShipState) => state.loaded;
export const getStarShipLoading = (state: StarShipState) => state.loading;
