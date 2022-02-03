export interface Order {
    id: number
    client_id: number
    packageName: string
    packageCalories: string
    deliveries: Delivery[]
}

export interface Delivery {
    id: number
    date: string
    interval: string
    address: string
}

export interface OrdersState {
    items: Order[] | null
}