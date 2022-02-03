import axios from "axios";

import { Dispatch } from "redux";
import { Order } from "../../types/order";
import { SetOrdersAction, OrdersActionsTypes } from "../actionTypes/orders";

export const setOrders = (payload: Order[]): SetOrdersAction => ({
    type: OrdersActionsTypes.SET_ORDERS,
    payload
});

export const fetchOrders = () => (dispatch: Dispatch) => {
    const fetch = async () => {
        const res = await axios.get<Order[]>('./data/orders.json');
        dispatch(setOrders(res.data));
    }
    fetch();
}

