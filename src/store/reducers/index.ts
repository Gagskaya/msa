import { combineReducers } from "redux";

import { users } from './users';
import { orders } from './orders';
import { orderDetails } from './orderDetails';

export const rootReducer = combineReducers({
    users,
    orders,
    orderDetails
});