import { Dispatch } from "redux";

import axios from "axios";

import { LoadingStatus } from "../../types/loadingStatus";
import { Order } from "../../types/order";
import { OrdersActionsTypes, OrdersActions } from "../actionTypes/orders";

export const fetchOrders = (clientId: number, orderId: string = '') => (dispatch: Dispatch) => {
    (async function () {
        dispatch(setOrdersLoadingStatus(LoadingStatus.LOADING));
        const res = await axios.get<Order[]>(`http://localhost:3001/orders/?clientId=${clientId}${orderId}`);
        dispatch(setOrders(res.data));
        dispatch(setOrdersLoadingStatus(LoadingStatus.SUCCESS));
    }());
};

export const setOrders = (payload: Order[]): OrdersActions => ({
    type: OrdersActionsTypes.SET_ORDERS,
    payload
});

export const fetchDuplicateOrder = (payload: Order) => (dispatch: Dispatch) => {
    (async function () {
        dispatch(setOrdersLoadingStatus(LoadingStatus.LOADING));
        const res = await axios.post<Order>(`http://localhost:3001/orders/?clientId=${payload.clientId}`, payload);
        dispatch(duplicateOrder(res.data));
        dispatch(setOrdersLoadingStatus(LoadingStatus.SUCCESS));
    }());
};

export const duplicateOrder = (payload: Order): OrdersActions => ({
    type: OrdersActionsTypes.DUPLICATE_ORDER,
    payload
});

export const fetchRemoveOrder = (payload: Order) => (dispatch: Dispatch) => {
    (async function () {
        dispatch(setOrdersLoadingStatus(LoadingStatus.LOADING));
        await axios.delete(`http://localhost:3001/orders/${payload.id}`);
        dispatch(removeOrder(payload));
        dispatch(setOrdersLoadingStatus(LoadingStatus.SUCCESS));
    }());
};

export const removeOrder = (payload: Order): OrdersActions => ({
    type: OrdersActionsTypes.REMOVE_ORDER,
    payload
});

export const setOrdersLoadingStatus = (payload: LoadingStatus): OrdersActions => ({
    type: OrdersActionsTypes.SET_ORDERS_LOADING_STATUS,
    payload
});