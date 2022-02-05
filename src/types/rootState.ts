import { UsersState } from "./user";
import { OrdersState } from "./order";
import { OrderDetailsState } from "./orderDetails";

export interface RootState {
    users: UsersState
    orders: OrdersState
    orderDetails: OrderDetailsState
}