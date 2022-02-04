import { Order } from '../../types/order';
import { OrderCardFooter } from '../OrderCardFooter';
import { OrderCardHeader } from '../OrderCardHeader';
import './OrderCard.scss';

interface OrderCardProps {
    order: Order
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {

    return <>
        <OrderCardHeader order={order} />
        <OrderCardFooter order={order} />
    </>;
};
