import './DeliveryCard.scss'

interface DeliveryCardProps {
    deliveryImage: string
    arrowIcon: string
}

export const DeliveryCard: React.FC<DeliveryCardProps> = ({ deliveryImage, arrowIcon }) => {
    return <div className='delivery-card'>
        <div className="delivery-card-date">
            <img src={deliveryImage} alt="delivery-image" />
            <p>14 мая, среда</p>

        </div>
        <div className="delivery-card-time">
            <p>8:00-10:00</p>
        </div>
        <div className="delivery-card-arrow">
            <img src={arrowIcon} alt="arrow" />
        </div>
    </div>;
};
