import { sortBy, orderBy } from 'lodash';
import { Order } from '../../types/order';
import { OrderCardFooter } from '../OrderCardFooter';
import { OrderCardHeader } from '../OrderCardHeader';

import './OrderCard.scss';

interface OrderCardProps {
    order: Order
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    const sortedDelivery = orderBy(order.deliveries, 'date', 'desc')[0];

    return <>
        <OrderCardHeader order={order} />
        <OrderCardFooter sortedDelivery={sortedDelivery} />
    </>;
};
