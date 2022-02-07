import { Action } from "redux";
import { LoadingStatus } from "../../types/loadingStatus";
import { Order } from "../../types/order";

export enum OrderDetailsActionsTypes {
    SET_ORDER_DETAILS = 'orderDetails/SET_ORDER_DETAILS',
    SET_ORDER_DETAILS_LOADING_STATUS = 'orderDetais/SET_ORDER_DETAILS_LOADING_STATUS'
};

export interface SetOrderDetails extends Action<OrderDetailsActionsTypes> {
    type: OrderDetailsActionsTypes.SET_ORDER_DETAILS,
    payload: Order;
};

export interface SetOrderDetailsLoadingStatus extends Action<OrderDetailsActionsTypes> {
    type: OrderDetailsActionsTypes.SET_ORDER_DETAILS_LOADING_STATUS,
    payload: LoadingStatus
};

export type OrderDetailsActions = SetOrderDetails | SetOrderDetailsLoadingStatus;