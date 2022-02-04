import { DetailsState } from "../../types/details"
import { DetailsActions, DetailsActionsTypes } from "../actionTypes/details";

const initialState: DetailsState = {
    item: null
}

export const details = (state = initialState, action: DetailsActions) => {
    switch (action.type) {
        case DetailsActionsTypes.SET_DETAILS:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}