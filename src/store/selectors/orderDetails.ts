import { RootState } from "../../types/rootState";

export const selectOrderDetails = ({ orderDetails }: RootState) => orderDetails.item;
