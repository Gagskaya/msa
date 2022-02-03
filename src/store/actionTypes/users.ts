import { Action } from "redux";
import { User } from "../../types/user";

export enum UsersActionsTypes {
    FETCH_USERS = 'FETCH_USERS',
    SET_USERS = 'SET_USERS'
}

export interface FetchUsersAction extends Action<UsersActionsTypes> {
    type: UsersActionsTypes.FETCH_USERS,
}

export interface SetUsersAction extends Action<UsersActionsTypes> {
    type: UsersActionsTypes.SET_USERS,
    payload: User[]
}

export type UsersActions = FetchUsersAction | SetUsersAction;