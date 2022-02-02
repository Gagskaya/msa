import { DeliveryCard } from "../../components/DeliveryCard";
import { OrderBtn } from "../../components/OrderBtn";
import { OrderCardHeader } from "../../components/OrderCardHeader";
import './Details.scss'

export const Details = () => {
    return <div className="details">
        <div className="details__btn">
            <button>Назад</button>
        </div>
        <div className="details__header">
            <OrderCardHeader />
        </div>

        <div className="details__delivery">
            <h3>Доставки</h3>
            <DeliveryCard />
            <DeliveryCard />
            <DeliveryCard />
        </div>
        <div className="details__order-btns">
            <OrderBtn title='Дублировать заказ' />
            <OrderBtn title='Отменить  заказ' />
        </div>
    </div>;
};
