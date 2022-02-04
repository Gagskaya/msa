import { RootState } from "../../types/rootState";

export const selectOrders = ({ orders }: RootState) => orders.items;
