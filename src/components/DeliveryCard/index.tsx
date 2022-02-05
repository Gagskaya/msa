import { getDate, getMonth, format } from 'date-fns'
import { ru } from 'date-fns/locale';

import { Delivery } from '../../types/order';
import './DeliveryCard.scss';

interface DeliveryCardProps {
    deliveryImage: string;
    arrowIcon: string;
    delivery: Delivery
}

export const DeliveryCard: React.FC<DeliveryCardProps> = ({ deliveryImage, arrowIcon, delivery }) => {
    const date = format(new Date(delivery.date), 'd LLLL, eeee', { locale: ru });

    return (
        <div className='delivery-card'>
            <div className="delivery-card-date">
                <img src={deliveryImage} alt="delivery-image" />
                <p>{date}</p>
            </div>
            <div className="delivery-card-time">
                <p>{delivery.interval}</p>
            </div>
            <div className="delivery-card-arrow">
                <img src={arrowIcon} alt="arrow" />
            </div>
        </div>
    )
};
