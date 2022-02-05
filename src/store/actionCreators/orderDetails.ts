import { Order } from "../../types/order";
import { OrderDetailsActions, OrderDetailsActionsTypes } from "../actionTypes/orderDetails";

export const setOrderDetails = (payload: Order | null): OrderDetailsActions => ({
    type: OrderDetailsActionsTypes.SET_ORDER_DETAILS,
    payload
});



