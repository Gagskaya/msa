import { RootState } from "../../types/rootState";

export const selectOrders = (state: RootState) => state.orders.items;
