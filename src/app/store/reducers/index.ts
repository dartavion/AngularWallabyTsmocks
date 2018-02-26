import { ActionReducerMap } from '@ngrx/store';

import * as fromStarWars from './star-wars.reducer';

export interface StarWarsState {
  starwars: fromStarWars.StarWarsState;
}


export const reducers: ActionReducerMap<StarWarsState> = {
  starwars: fromStarWars.reducer,
};
