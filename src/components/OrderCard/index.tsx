import { orderBy } from 'lodash';

import { Order } from '../../types/order';

import { OrderCardFooter } from '../OrderCardFooter';
import OrderCardHeader from '../OrderCardHeader';

import './OrderCard.scss';

interface OrderCardProps {
    order: Order;
    onShowDetails: (order: Order) => void;
};

export const OrderCard: React.FC<OrderCardProps> = ({ order, onShowDetails }) => {
    const closestDeliveries = orderBy(order.deliveries, 'date', 'asc');
    const closestDelivery = closestDeliveries.find(delivery => new Date(delivery.date) > new Date());
    return (
        <div className="order-card" onClick={() => onShowDetails(order)}>
            <OrderCardHeader order={order} />
            <OrderCardFooter closestDelivery={closestDelivery} />
        </div>
    );
};

