
import axios from "axios";
import { Dispatch } from "redux";
import { User } from "../../types/user";
import { FetchUsersAction, SetUsersAction, UsersActionsTypes } from "../actionTypes/users";

export const setUsers = (payload: User[]): SetUsersAction => ({
    type: UsersActionsTypes.SET_USERS,
    payload
});

export const fetchUsers = () => (dispatch: Dispatch) => {
    const fetch = async () => {
        const res = await axios.get<User[]>('./data/clients.json');
        // const json = await res.json();
        dispatch(setUsers(res.data));
    }
    fetch();
}

