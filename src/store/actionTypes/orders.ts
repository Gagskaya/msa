import { Action } from "redux";
import { Order } from "../../types/order";

export enum OrdersActionsTypes {
    FETCH_ORDERS = 'FETCH_ORDERS',
    SET_ORDERS = 'SET_ORDERS',
    DUPLICATE_ORDER = 'DUPLICATE_ORDER'
}

export interface FetchOrdersAction extends Action<OrdersActionsTypes> {
    type: OrdersActionsTypes.FETCH_ORDERS,
}

export interface SetOrdersAction extends Action<OrdersActionsTypes> {
    type: OrdersActionsTypes.SET_ORDERS,
    payload: Order[] | null
}

export interface DuplicateOrderAction extends Action<OrdersActionsTypes> {
    type: OrdersActionsTypes.DUPLICATE_ORDER,
    payload: Order
}

export type OrdersActions = FetchOrdersAction | SetOrdersAction | DuplicateOrderAction;