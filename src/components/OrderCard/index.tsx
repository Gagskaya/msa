import { useNavigate } from 'react-router-dom';
import { Order } from '../../types/order';
import { OrderCardFooter } from '../OrderCardFooter';
import { OrderCardHeader } from '../OrderCardHeader';
import './OrderCard.scss';

interface OrderCardProps {
    order: Order
}

export const OrderCard: React.FC<OrderCardProps> = ({ order }) => {
    const navigate = useNavigate();
    return <div className='order-card' onClick={() => navigate(`/orders/${order.id}`)}>
        <OrderCardHeader order={order} />
        <OrderCardFooter order={order} />
    </div>;
};
