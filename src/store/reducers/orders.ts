import { OrdersState } from "../../types/order"
import { OrdersActions, OrdersActionsTypes } from "../actionTypes/orders";

const initialState: OrdersState = {
    items: null
}

export const orders = (state = initialState, action: OrdersActions) => {
    switch (action.type) {
        case OrdersActionsTypes.SET_ORDERS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}