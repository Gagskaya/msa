import { OrderCardFooter } from '../OrderCardFooter';
import { OrderCardHeader } from '../OrderCardHeader';
import './OrderCard.scss';

export const OrderCard = () => {
    return <div className='order-card'>
        <OrderCardHeader />
        <OrderCardFooter />
    </div>;
};
