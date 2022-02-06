import { Order } from '../../types/order';
import './OrderBtn.scss';

interface OrderBtnProps {
    title: string;
    icon: string;
    handleChange?: () => void;
    alt: string
};

export const OrderBtn: React.FC<OrderBtnProps> = ({ title, icon, handleChange, alt }) => {

    return (
        <button className='order-btn' onClick={handleChange}>
            <span>{title}</span>
            <span><img src={icon} alt={alt} /></span>
        </button>
    );
};
