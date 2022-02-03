import axios from "axios";
import { Dispatch } from "redux";
import { User } from "../../types/user";
import { UsersActions, UsersActionsTypes } from "../actionTypes/users";

export const fetchUsers = () => (dispatch: Dispatch) => {
    const fetch = async () => {
        const res = await axios.get<User[]>('./data/clients.json');
        dispatch(setUsers(res.data));
    }
    fetch();
};

export const setUsers = (payload: User[]): UsersActions => ({
    type: UsersActionsTypes.SET_USERS,
    payload
});

export const setLoggedInUser = (payload: User): UsersActions => ({
    type: UsersActionsTypes.SET_LOGGED_IN_USER,
    payload
});