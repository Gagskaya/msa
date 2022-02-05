import axios from "axios";

import { Dispatch } from "redux";
import { Order } from "../../types/order";
import { OrdersActionsTypes, OrdersActions } from "../actionTypes/orders";

export const fetchOrders = (clientId: number, orderId: string = '') => (dispatch: Dispatch) => {
    (async function () {
        const res = await axios.get<Order[]>(`http://localhost:3001/orders/?clientId=${clientId}${orderId}`);
        dispatch(setOrders(res.data));
    }());
};

export const setOrders = (payload: Order[]): OrdersActions => ({
    type: OrdersActionsTypes.SET_ORDERS,
    payload
});

export const fetchDuplicateOrder = (payload: Order) => (dispatch: Dispatch) => {
    (async function () {
        const res = await axios.post<Order>(`http://localhost:3001/orders/?clientId=${payload?.clientId}`, payload);
        dispatch(duplicateOrder(res.data));
    }());
};

export const duplicateOrder = (payload: Order): OrdersActions => ({
    type: OrdersActionsTypes.DUPLICATE_ORDER,
    payload
});

export const fetchRemoveOrder = (payload: Order) => (dispatch: Dispatch) => {
    (async function () {
        const res = await axios.delete<Order[]>(`http://localhost:3001/orders/?clientId=${payload?.clientId}`);
        dispatch(setOrders(res.data));
        console.log(res.data);
    }());
};
// export const removeOrder = (payload: O)