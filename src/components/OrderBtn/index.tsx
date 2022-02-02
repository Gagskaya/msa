import './OrderBtn.scss'

interface OrderBtnProps {
    title: string
    icon?: any
}

export const OrderBtn: React.FC<OrderBtnProps> = ({ title, icon }) => {
    return <button className='order-btn'><span>{title}</span></button>
};
