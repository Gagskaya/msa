import './OrderBtn.scss'

interface OrderBtnProps {
    title: string
    icon: string
}

export const OrderBtn: React.FC<OrderBtnProps> = ({ title, icon }) => {
    return <button className='order-btn'>
        <span>{title}</span>
        <span><img src={icon} alt="" /></span>
    </button>
};
