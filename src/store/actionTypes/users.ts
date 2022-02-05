import { Action } from "redux";
import { User } from "../../types/user";

export enum UsersActionsTypes {
    FETCH_USERS = 'users/FETCH_USERS',
    SET_USERS = 'users/SET_USERS',
    SET_USER = 'users/SET_USER'
};

export interface SetUsers extends Action<UsersActionsTypes> {
    type: UsersActionsTypes.SET_USERS,
    payload: User[]
};

export interface SetUser extends Action<UsersActionsTypes> {
    type: UsersActionsTypes.SET_USER,
    payload: User
};

export type UsersActions = SetUsers | SetUser;