import { Delivery, Order } from '../../types/order';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import './OrderCardFooter.scss';

interface OrderCardFooterProps {
    sortedDelivery: Delivery
}

export const OrderCardFooter: React.FC<OrderCardFooterProps> = ({ sortedDelivery }) => {
    const month = format(new Date(sortedDelivery.date), 'LLL', { locale: ru });
    const day = format(new Date(sortedDelivery.date), 'd', { locale: ru });
    const dayOfWeek = format(new Date(sortedDelivery.date), 'eeee', { locale: ru });

    return (
        <div className="order-card__footer">
            <div className="order-card__footer-date">
                <span>{month}</span>
                <span>{day}</span>
            </div>
            <div className="order-card__footer-info">
                <h5>
                    Ближайшая доставка
                    <span>в {dayOfWeek} –</span>
                </h5>
                <div>
                    <p>{sortedDelivery.interval}</p>
                    <p>{`Работа на объекте ${sortedDelivery.address}`}</p>
                </div>

            </div>
        </div>
    );
};
