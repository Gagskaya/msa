import { memo } from 'react';
import { formatDistance } from 'date-fns'


import { Progress } from '../Progress';
import { Order } from '../../types/order';

import './OrderCardHeader.scss';

interface OrderCardHeaderProps {
    order: Order
};

const OrderCardHeader: React.FC<OrderCardHeaderProps> = ({ order }) => {
    // const date = format(new Date(delivery.date), 'd LLLL, eeee', { locale: ru });
    const isDelivered = order.deliveries.map(delivery => {
        if (new Date(delivery.date) <= new Date()) {
            return true;
        }
        return false;
    })
    const progress = isDelivered.map(item => {
        if (item) {
            return 100 / isDelivered.length;
        }
        else {
            return
        }
    });
    const newProgress = progress.reduce((total: number, item) => {
        if (item) {
            return total += item;
        }
        else {
            return total;
        }
    }, 0)
    console.log(newProgress);
    return (
        <div className="order-card__header">
            <div className="order-card__header-title">
                <h2>6 дней</h2>
                <div>
                    <span>{order.packageName}</span>
                    <h4>{order.packageCalories}</h4>
                </div>

            </div>
            <div className="order-card__header-progress">
                <Progress newProgress={newProgress} />
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