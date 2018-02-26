import { Action } from '@ngrx/store';

import { Characters } from '../../models/star-wars.model';

export const LOAD_STAR_WARS = '[Products] Load StarWars';
export const LOAD_STAR_WARS_FAIL = '[Products] Load StarWars Fail';
export const LOAD_STAR_WARS_SUCCESS = '[Products] Load StarWars Success';

export class LoadStarWars implements Action {
  readonly type = LOAD_STAR_WARS;
}

export class LoadStarWarsFail implements Action {
  readonly type = LOAD_STAR_WARS_FAIL;
  constructor(public payload: any) {}
}

export class LoadStarWarsSuccess implements Action {
  readonly type = LOAD_STAR_WARS_SUCCESS;
  constructor(public payload: Characters[]) {}
}

// action types
export type StarWarsAction = LoadStarWars | LoadStarWarsFail | LoadStarWarsSuccess;
