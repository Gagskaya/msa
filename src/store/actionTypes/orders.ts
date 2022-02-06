import { Action } from "redux";
import { Order } from "../../types/order";

export enum OrdersActionsTypes {
    FETCH_ORDERS = 'orders/FETCH_ORDERS',
    SET_ORDERS = 'orders/SET_ORDERS',
    DUPLICATE_ORDER = 'orders/DUPLICATE_ORDER',
    REMOVE_ORDER = 'orders/REMOVE_ORDER',
    SET_ORDER_PROGRESS_VALUE = 'orders/SET_ORDER_PROGRESS_VALUE'
};

export interface SetOrders extends Action<OrdersActionsTypes> {
    type: OrdersActionsTypes.SET_ORDERS,
    payload: Order[];
};

export interface DuplicateOrder extends Action<OrdersActionsTypes> {
    type: OrdersActionsTypes.DUPLICATE_ORDER,
    payload: Order;
};

export interface RemoveOrder extends Action<OrdersActionsTypes> {
    type: OrdersActionsTypes.REMOVE_ORDER,
    payload: Order;
};

export type OrdersActions = SetOrders | DuplicateOrder | RemoveOrder;