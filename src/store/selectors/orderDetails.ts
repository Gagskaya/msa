import { RootState } from "../../types/rootState";

export const selectOrderDetails = ({ orderDetails }: RootState) => orderDetails.item;
export const selectOrderDetailsLoadingStatus = ({ orderDetails }: RootState) => orderDetails.loadingStatus;