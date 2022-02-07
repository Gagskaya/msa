export interface Order {
    id: number;
    clientId: number;
    packageName: string;
    packageCalories: string;
    deliveries: Delivery[];
};

export interface Delivery {
    id: number;
    date: string;
    interval: string;
    address: string;
};

export interface OrdersState {
    items: Order[];
    orderProgressValue: number,
    loadingStatus: string
};

