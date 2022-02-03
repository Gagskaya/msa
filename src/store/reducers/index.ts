import { combineReducers } from "redux";
import { users } from './users';
import { orders } from './orders';

export const rootReducer = combineReducers({
    users,
    orders,
})