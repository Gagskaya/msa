import axios from "axios";

import { Dispatch } from "redux";
import { Order } from "../../types/order";
import { OrdersActionsTypes, OrdersActions } from "../actionTypes/orders";

export const fetchOrders = (clientId: number | undefined, orderId: string = '') => (dispatch: Dispatch) => {
    (async function () {
        const res = await axios.get<Order[]>(`http://localhost:3001/orders?clientId=${clientId}${orderId}`);
        dispatch(setOrders(res.data));
    }())
}

export const setOrders = (payload: Order[]): OrdersActions => ({
    type: OrdersActionsTypes.SET_ORDERS,
    payload
});



