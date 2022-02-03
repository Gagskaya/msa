import { memo } from 'react';

import { OrderCard } from '../../components/OrderCard';

import './Orders.scss'

const Orders = () => {

    return <div className="orders">
        <div className="orders__title">
            <h2>Мои заказы</h2>
            <span>2</span>
        </div>
        <div className="orders__cards">
            <OrderCard />
            <OrderCard />
        </div>

    </div>;
};
export default memo(Orders)