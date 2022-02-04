import { Action } from "redux";
import { Order } from "../../types/order";

export enum DetailsActionsTypes {
    SET_DETAILS = 'SET_DETAILS'
}


export interface SetDetailsAction extends Action<DetailsActionsTypes> {
    type: DetailsActionsTypes.SET_DETAILS,
    payload: Order
}

export type DetailsActions = SetDetailsAction;