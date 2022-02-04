import { DetailsState } from "./details";
import { OrdersState } from "./order";
import { UsersState } from "./user";


export interface RootState {
    users: UsersState
    orders: OrdersState
    details: DetailsState
}