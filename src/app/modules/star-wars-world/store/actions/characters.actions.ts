import { Action } from '@ngrx/store';
import { Character } from 'app/models/star-wars.model';

export enum CharacterActionTypes {
  LoadCharacters = '[Characters] Load Characters',
  LoadCharactersFail = '[Characters] Load Characters Fail',
  LoadCharactersSuccess = '[Characters] Load Characters Success'
}

export class LoadCharacters implements Action {
  readonly type = CharacterActionTypes.LoadCharacters;
}

export class LoadCharactersFail implements Action {
  readonly type = CharacterActionTypes.LoadCharactersFail;
  constructor(public payload: any) {}
}

export class LoadCharactersSuccess implements Action {
  readonly type = CharacterActionTypes.LoadCharactersSuccess;
  constructor(public payload: Character[]) {}
}

export type CharacterActions = LoadCharacters | LoadCharactersFail | LoadCharactersSuccess;
