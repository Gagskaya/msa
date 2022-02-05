import { Action } from "redux";
import { Order } from "../../types/order";

export enum OrderDetailsActionsTypes {
    SET_ORDER_DETAILS = '/orderDetails/SET_ORDER_DETAILS'
}


export interface SetOrderDetailsAction extends Action<OrderDetailsActionsTypes> {
    type: OrderDetailsActionsTypes.SET_ORDER_DETAILS,
    payload: Order | null
}

export type OrderDetailsActions = SetOrderDetailsAction;