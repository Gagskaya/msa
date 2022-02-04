import { combineReducers } from "redux";
import { users } from './users';
import { orders } from './orders';
import { details } from './details';

export const rootReducer = combineReducers({
    users,
    orders,
    details
})