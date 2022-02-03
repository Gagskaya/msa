import { createSelector } from "reselect";

import { RootState } from "../../types/rootState";
import { selectLoggedInUser, selectUsers } from "./users";



export const selectOrders = (state: RootState) => state.orders.items;
export const selectFilteredOrders = createSelector([selectOrders, selectLoggedInUser], (orders, user) => orders?.filter(item => item.client_id === user?.id))