import { Action } from '@ngrx/store';

export enum CharacterActionTypes {
  CharacterAction = '[Character] Action'
}

export class Character implements Action {
  readonly type = CharacterActionTypes.CharacterAction;
}

export type CharacterActions = Character;
