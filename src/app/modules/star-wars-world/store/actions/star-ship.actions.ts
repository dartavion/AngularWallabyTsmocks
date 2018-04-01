import { Action } from '@ngrx/store';
import { StarShip } from '../../../../models/star-ship';

export enum StarShipActionTypes {
  LoadStarShip = '[Character] Load Star Ship',
  LoadStarShipFail = '[Character] Load Star Ship Fail',
  LoadStarShipSuccess = '[Character] Load Star Ship Success'
}

export class LoadStarShip implements Action {
  payload = undefined;
  readonly type = StarShipActionTypes.LoadStarShip;
}

export class LoadStarShipFail implements Action {
  readonly type = StarShipActionTypes.LoadStarShipFail;
  constructor(public payload: any) {}
}

export class LoadStarShipSuccess implements Action {
  readonly type = StarShipActionTypes.LoadStarShipSuccess;
  constructor(public payload: StarShip[]) {}
}

export type StarShipActions = LoadStarShip | LoadStarShipFail | LoadStarShipSuccess;
