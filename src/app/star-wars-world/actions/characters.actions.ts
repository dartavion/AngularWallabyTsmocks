import { Action } from '@ngrx/store';

export enum CharacterActionTypes {
  LoadCharactersAction = '[Characters] Load Characters'
}

export class LoadCharacters implements Action {
  readonly type = CharacterActionTypes.LoadCharactersAction;
}

export type CharacterActions = LoadCharacters;
