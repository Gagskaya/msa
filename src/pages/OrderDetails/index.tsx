import { memo, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom'

import { DeliveryCard } from "../../components/DeliveryCard";
import { OrderBtn } from "../../components/OrderBtn";
import OrderCardHeader from "../../components/OrderCardHeader";

import { selectOrderDetails } from "../../store/selectors/orderDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../store/selectors/users";
import { duplicateOrder, fetchOrders } from "../../store/actionCreators/orders";
import { Order } from "../../types/order";

import orderAddBtn from '../../assets/images/order-add-btn.svg';
import orderDeleteBtn from '../../assets/images/order-delete-btn.svg';
import deliveryIcon from '../../assets/images/delivery-img.svg';
import arrowIcon from '../../assets/images/arrow.svg';

import './OrderDetails.scss';


const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const orderDetails = useSelector(selectOrderDetails);
    const user = useSelector(selectUser);

    useEffect(() => {
        dispatch(fetchOrders(user?.id, `&id=${id}`));
    }, [dispatch, user]);

    const onMoveBack = () => {
        navigate('/orders');
    };

    const onDuplicateOrder = (order: Order | null) => {
        if (order) {
            const newOrder = { ...order, id: Math.random() };
            dispatch(duplicateOrder(newOrder));
        }
    };
    return (
        <div className="order-details">
            <div className="order-details__btn">
                <button onClick={onMoveBack}>Назад</button>
            </div>
            <div className="order-details__header">
                <OrderCardHeader />
            </div>
            <div className="order-details__delivery">
                <h3>Доставки</h3>
                {orderDetails?.deliveries.map((delivery) =>
                    <DeliveryCard key={delivery.id} delivery={delivery} deliveryImage={deliveryIcon} arrowIcon={arrowIcon} />)}

            </div>
            <div className="order-details__order-btns">
                <OrderBtn title='Дублировать заказ' icon={orderAddBtn} onDuplicateOrder={() => onDuplicateOrder(orderDetails)} />
                <OrderBtn title='Отменить  заказ' icon={orderDeleteBtn} />
            </div>
        </div>
    )
};

export default memo(OrderDetails)