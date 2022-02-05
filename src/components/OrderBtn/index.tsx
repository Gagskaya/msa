import './OrderBtn.scss'

interface OrderBtnProps {
    title: string;
    icon: string;
    onDuplicateOrder?: any;
    alt: string
};

export const OrderBtn: React.FC<OrderBtnProps> = ({ title, icon, onDuplicateOrder, alt }) => {

    return (
        <button className='order-btn' onClick={onDuplicateOrder}>
            <span>{title}</span>
            <span><img src={icon} alt={alt} /></span>
        </button>
    );
};
