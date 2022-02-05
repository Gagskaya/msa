import './OrderBtn.scss'

interface OrderBtnProps {
    title: string
    icon: string
    onDuplicateOrder?: any
}

export const OrderBtn: React.FC<OrderBtnProps> = ({ title, icon, onDuplicateOrder }) => {
    return <button className='order-btn' onClick={onDuplicateOrder}>
        <span>{title}</span>
        <span><img src={icon} alt="" /></span>
    </button>
};
