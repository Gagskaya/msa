import { memo } from 'react';
import { formatDistance } from 'date-fns'


import { Progress } from '../Progress';
import { Order } from '../../types/order';

import './OrderCardHeader.scss';

interface OrderCardHeaderProps {
    order: Order;
    progressValue: number
};

const OrderCardHeader: React.FC<OrderCardHeaderProps> = ({ order, progressValue }) => {

    return (
        <div className="order-card__header">
            <div className="order-card__header-title">
                <h2>6 дней</h2>
                <div>
                    <span>{order?.packageName}</span>
                    <h4>{order?.packageCalories}</h4>
                </div>

            </div>
            <div className="order-card__header-progress">
                <Progress progressValue={progressValue} />
                <div className="order-card__header-progress-footer">
                    <p>20 окт</p>
                    <p>Осталось 25 дней</p>
                    <p>10 ноя </p>
                </div>
            </div>
        </div>
    );
};

export default memo(OrderCardHeader);