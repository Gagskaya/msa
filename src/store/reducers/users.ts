import { UsersState } from "../../types/user"
import { UsersActions, UsersActionsTypes } from "../actionTypes/users";

const initialState: UsersState = {
    items: null,
    item: null
}

export const users = (state = initialState, action: UsersActions) => {
    switch (action.type) {
        case UsersActionsTypes.SET_USERS:
            return {
                ...state,
                items: action.payload
            }
        case UsersActionsTypes.SET_LOGGED_IN_USER:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}