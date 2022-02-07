import { LoadingStatus } from "../../types/loadingStatus";
import { Order } from "../../types/order";
import { OrderDetailsState } from "../../types/orderDetails";
import { OrderDetailsActions, OrderDetailsActionsTypes } from "../actionTypes/orderDetails";

const initialState: OrderDetailsState = {
    item: {} as Order,
    loadingStatus: LoadingStatus.NEVER
};

export const orderDetails = (state = initialState, action: OrderDetailsActions) => {
    switch (action.type) {
        case OrderDetailsActionsTypes.SET_ORDER_DETAILS:
            return {
                ...state,
                item: action.payload
            };
        case OrderDetailsActionsTypes.SET_ORDER_DETAILS_LOADING_STATUS:
            return {
                ...state,
                loadingStatus: action.payload
            };
        default:
            return state;
    };
};