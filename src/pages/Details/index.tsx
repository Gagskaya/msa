import { memo, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'

import { DeliveryCard } from "../../components/DeliveryCard";
import { OrderBtn } from "../../components/OrderBtn";
import { OrderCardHeader } from "../../components/OrderCardHeader";

import orderAddBtn from '../../assets/images/order-add-btn.svg';
import orderDeleteBtn from '../../assets/images/order-delete-btn.svg';
import deliveryIcon from '../../assets/images/delivery-img.svg';
import arrowIcon from '../../assets/images/arrow.svg';

import './Details.scss'
import { selectDetails } from "../../store/selectors/details";
import { useSelector } from "react-redux";



const Details = () => {
    const navigate = useNavigate();
    const details = useSelector(selectDetails);
    console.log(details);

    const moveBack = () => {
        navigate('/orders');
    }
    return (
        <div className="details">
            <div className="details__btn">
                <button onClick={moveBack}>Назад</button>
            </div>
            <div className="details__header">
                {/* <OrderCardHeader /> */}
            </div>
            <div className="details__delivery">
                <h3>Доставки</h3>
                <DeliveryCard deliveryImage={deliveryIcon} arrowIcon={arrowIcon} deliveries={details?.deliveries} />
            </div>
            <div className="details__order-btns">
                <OrderBtn title='Дублировать заказ' icon={orderAddBtn} />
                <OrderBtn title='Отменить  заказ' icon={orderDeleteBtn} />
            </div>
        </div>
    )
};

export default memo(Details)