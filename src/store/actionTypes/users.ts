import { Action } from "redux";
import { User } from "../../types/user";

export enum UsersActionsTypes {
    FETCH_USERS = 'users/FETCH_USERS',
    SET_USERS = 'users/SET_USERS',
    SET_LOGGED_IN_USER = 'users/SET_LOGGED_IN_USER'
}

export interface SetLoggedInUserAction extends Action<UsersActionsTypes> {
    type: UsersActionsTypes.SET_LOGGED_IN_USER,
    payload: User
}

export interface SetUsersAction extends Action<UsersActionsTypes> {
    type: UsersActionsTypes.SET_USERS,
    payload: User[]
}

export type UsersActions = SetUsersAction | SetLoggedInUserAction;