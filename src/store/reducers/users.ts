import { Action } from "redux"
import { User } from "../../types/user"
import { UsersActions, UsersActionsTypes } from "../actionTypes/users";

interface UsersState {
    items: null | User[]
}

const initialState: UsersState = {
    items: null
}

export const users = (state = initialState, action: UsersActions) => {
    switch (action.type) {
        case UsersActionsTypes.SET_USERS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}