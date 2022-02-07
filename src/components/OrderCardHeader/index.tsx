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
    if (order?.deliveries) {
        const orderByDate = orderBy(order.deliveries, 'date', 'asc');
        const startDay = format(new Date(orderByDate[0].date), 'd', { locale: ru });
        const startMonth = format(new Date(orderByDate[0].date), 'LLL', { locale: ru });
        const endDay = format(new Date(orderByDate[orderByDate.length - 1].date), 'd', { locale: ru });
        const endMonth = format(new Date(orderByDate[orderByDate.length - 1].date), 'LLL', { locale: ru });
        const distance = formatDistance(new Date(orderByDate[0].date), new Date(orderByDate[orderByDate.length - 1].date), { locale: ru });
        const distanceFromNow = formatDistance(new Date(), new Date(orderByDate[orderByDate.length - 1].date), { locale: ru });
        const isUpToDate = new Date(orderByDate[orderByDate.length - 1].date) > new Date();

        return (
            <div className="order-card__header">
                <div className="order-card__header-title">
                    <h2>{distance}</h2>
                    <div>
                        <span>{order?.packageName}</span>
                        <h4>{order?.packageCalories}</h4>
                    </div>

                </div>
                <div className="order-card__header-progress">
                    <Progress order={order} />
                    <div className="order-card__header-progress-footer">
                        <p>{startMonth} {startDay}</p>
                        <p>{`Осталось ${isUpToDate ? distanceFromNow : '0 дней (Все заказы доставлены)'}`}</p>
                        <p>{endMonth} {endDay} </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
};

export default memo(OrderCardHeader);