import { LoadingStatus } from "../../types/loadingStatus";
import { OrdersState } from "../../types/order"
import { OrdersActions, OrdersActionsTypes } from "../actionTypes/orders";

const initialState: OrdersState = {
    items: [],
    orderProgressValue: 0,
    loadingStatus: LoadingStatus.NEVER
}

export const orders = (state = initialState, action: OrdersActions) => {
    switch (action.type) {
        case OrdersActionsTypes.SET_ORDERS:
            return {
                ...state,
                items: action.payload
            };
        case OrdersActionsTypes.DUPLICATE_ORDER:
            return {
                ...state,
                items: [...state.items, action.payload]
            };
        case OrdersActionsTypes.REMOVE_ORDER:
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id)
            };
        case OrdersActionsTypes.SET_ORDERS_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.payload
            };
        default:
            return state;
    };
}