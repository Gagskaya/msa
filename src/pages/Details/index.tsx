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
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../../store/selectors/users";
import { fetchOrders } from "../../store/actionCreators/orders";
import { setDetails } from "../../store/actionCreators/details";



const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const dispatch = useDispatch();
    const details = useSelector(selectDetails);
    const user = useSelector(selectLoggedInUser);
    console.log(details);

    const moveBack = () => {
        navigate('/orders');
    }

    useEffect(() => {
        dispatch(fetchOrders(user?.id, `&id=${id}`));
    }, [dispatch, user])
    return (
        <div className="details">
            <div className="details__btn">
                <button onClick={moveBack}>Назад</button>
            </div>
            <div className="details__header">
                <OrderCardHeader />
            </div>
            <div className="details__delivery">
                <h3>Доставки</h3>
                {details?.deliveries.map((delivery) => <DeliveryCard key={delivery.id} delivery={delivery} deliveryImage={deliveryIcon} arrowIcon={arrowIcon} />)}

            </div>
            <div className="details__order-btns">
                <OrderBtn title='Дублировать заказ' icon={orderAddBtn} />
                <OrderBtn title='Отменить  заказ' icon={orderDeleteBtn} />
            </div>
        </div>
    )
};

export default memo(Details)