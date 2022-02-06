import { memo } from 'react';

import { Progress } from '../Progress';
import { Order } from '../../types/order';

import './OrderCardHeader.scss';
import { format, formatDistance } from 'date-fns';
import { ru } from 'date-fns/locale';
import { orderBy } from 'lodash';

interface OrderCardHeaderProps {
    order: Order;

};

const OrderCardHeader: React.FC<OrderCardHeaderProps> = ({ order }) => {
    const a = orderBy(order?.deliveries, 'date', 'desc');
    console.log(order.deliveries, a);
    const startMonth = order?.deliveries && format(new Date(order.deliveries[0].date), 'LLL', { locale: ru });
    const startDay = order?.deliveries && format(new Date(order.deliveries[0].date), 'd', { locale: ru });
    const endDay = order?.deliveries && format(new Date(order.deliveries[order.deliveries.length - 1].date), 'd', { locale: ru });
    const endMonth = order?.deliveries && format(new Date(order.deliveries[order.deliveries.length - 1].date), 'LLL', { locale: ru });
    const distance = order?.deliveries && formatDistance(new Date(order.deliveries[0].date), new Date(order.deliveries[order.deliveries.length - 1].date), { locale: ru });

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
                <Progress order={order} />
                <div className="order-card__header-progress-footer">
                    <p>{startMonth} {startDay}</p>
                    <p>Осталось {`${distance}`}</p>
                    <p>{endDay} {endMonth} </p>
                </div>
            </div>
        </div>
    );
};

export default memo(OrderCardHeader);