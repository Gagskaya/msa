import { Order } from "./order";

export interface OrderDetailsState {
    item: Order;
    loadingStatus: string;
};