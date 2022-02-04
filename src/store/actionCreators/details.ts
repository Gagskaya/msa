import { Order } from "../../types/order";
import { DetailsActions, DetailsActionsTypes } from "../actionTypes/details";

export const setDetails = (payload: Order | null): DetailsActions => ({
    type: DetailsActionsTypes.SET_DETAILS,
    payload
});



