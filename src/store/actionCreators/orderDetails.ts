import axios from "axios";
import { Dispatch } from "redux";

import { Order } from "../../types/order";
import { OrderDetailsActions, OrderDetailsActionsTypes } from "../actionTypes/orderDetails";

export const fetchOrderDetails = (clientId: number, orderId: string = '') => (dispatch: Dispatch) => {
    (async function () {
        const res = await axios.get<Order[]>(`http://localhost:3001/orders/?clientId=${clientId}${orderId}`);
        dispatch(setOrderDetails(res.data[0]));
    }());
};

export const setOrderDetails = (payload: Order): OrderDetailsActions => ({
    type: OrderDetailsActionsTypes.SET_ORDER_DETAILS,
    payload
});




