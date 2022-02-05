import axios from "axios";

import { Dispatch } from "redux";
import { User } from "../../types/user";
import { UsersActions, UsersActionsTypes } from "../actionTypes/users";

export const fetchUsers = () => (dispatch: Dispatch) => {
    (async function () {
        const res = await axios.get<User[]>('http://localhost:3001/users');
        dispatch(setUsers(res.data));
    }())
};

export const setUsers = (payload: User[]): UsersActions => ({
    type: UsersActionsTypes.SET_USERS,
    payload
});

export const setUser = (payload: User): UsersActions => ({
    type: UsersActionsTypes.SET_LOGGED_IN_USER,
    payload
});