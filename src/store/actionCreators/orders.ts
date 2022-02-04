import axios from "axios";

import { Dispatch } from "redux";
import { Order } from "../../types/order";
import { SetOrdersAction, OrdersActionsTypes } from "../actionTypes/orders";

export const setOrders = (payload: Order[]): SetOrdersAction => ({
    type: OrdersActionsTypes.SET_ORDERS,
    payload
});

export const fetchOrders = (id: number | undefined, orderId: string = '') => (dispatch: Dispatch) => {
    (async function () {
        const res = await axios.get<Order[]>(`http://localhost:3001/orders?clientId=${id}${orderId}`);
        dispatch(setOrders(res.data));
    }())
}

