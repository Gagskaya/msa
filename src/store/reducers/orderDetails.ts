import { OrderDetailsState } from "../../types/orderDetails"
import { OrderDetailsActions, OrderDetailsActionsTypes } from "../actionTypes/orderDetails";

const initialState: OrderDetailsState = {
    item: null
}

export const orderDetails = (state = initialState, action: OrderDetailsActions) => {
    switch (action.type) {
        case OrderDetailsActionsTypes.SET_ORDER_DETAILS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}