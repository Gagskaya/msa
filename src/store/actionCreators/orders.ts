import axios from "axios";

import { Dispatch } from "redux";
import { Order } from "../../types/order";
import { OrdersActionsTypes, OrdersActions } from "../actionTypes/orders";
import { setOrderDetails } from "./orderDetails";

export const fetchOrders = (clientId: number | undefined, orderId: string = '') => (dispatch: Dispatch) => {
    (async function () {
        const res = await axios.get<Order[]>(`http://localhost:3001/orders/?clientId=${clientId}${orderId}`);
        dispatch(setOrders(res.data));
        dispatch(setOrderDetails(res.data[0]))
    }())
};

export const setOrders = (payload: Order[] | null): OrdersActions => ({
    type: OrdersActionsTypes.SET_ORDERS,
    payload
});


export const duplicateOrder = (payload: Order | null) => (dispatch: Dispatch) => {
    (async function () {
        const res = await axios.post<Order>(`http://localhost:3001/orders/?clientId=${payload?.clientId}`, payload);
        // dispatch(setOrders(res.data));
        console.log(res.data);
    }())
};