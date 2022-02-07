import { memo, useEffect } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import { DeliveryCard } from "../../components/DeliveryCard";
import { OrderBtn } from "../../components/OrderBtn";
import OrderCardHeader from "../../components/OrderCardHeader";

import { selectOrderDetails, selectOrderDetailsLoadingStatus } from "../../store/selectors/orderDetails";
import { selectUser } from "../../store/selectors/users";
import { fetchDuplicateOrder, fetchRemoveOrder } from "../../store/actionCreators/orders";
import { fetchOrderDetails } from "../../store/actionCreators/orderDetails";
import { Order } from "../../types/order";

import orderAddBtn from '../../assets/images/order-add-btn.svg';
import orderDeleteBtn from '../../assets/images/order-delete-btn.svg';
import deliveryIcon from '../../assets/images/delivery-img.svg';
import arrowIcon from '../../assets/images/arrow.svg';

import './OrderDetails.scss';
import { LoadingStatus } from "../../types/loadingStatus";

const OrderDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const orderDetails = useSelector(selectOrderDetails);
    const user = useSelector(selectUser);
    const loadingStatus = useSelector(selectOrderDetailsLoadingStatus);

    const onMoveBack = () => {
        navigate('/orders');
    };

    const onDuplicateOrder = (order: Order) => {
        const newOrder = { ...order, id: Math.random() };
        dispatch(fetchDuplicateOrder(newOrder));
        navigate(`/orders/${newOrder.id}`);
    };

    const onRemoveOrder = (order: Order) => {
        if (order.clientId === user.id) {
            dispatch(fetchRemoveOrder(order));
            navigate('/orders');
        };
    };

    useEffect(() => {
        if (user) {
            dispatch(fetchOrderDetails(user.id, `&id=${id}`));
        };
    }, [dispatch, user, id]);

    return (
        <div className="order-details">
            <div className="order-details__btn">
                <button onClick={onMoveBack}>Назад</button>
            </div>
            {loadingStatus === LoadingStatus.LOADING ? <div>Загрузка...</div> : <>
                <div className="order-details__header">
                    <OrderCardHeader order={orderDetails} />
                </div>
                <div className="order-details__delivery">
                    <h3>Доставки</h3>
                    {orderDetails?.deliveries?.map((delivery) =>
                        <DeliveryCard key={delivery.id}
                            delivery={delivery} deliveryImage={deliveryIcon} arrowIcon={arrowIcon} />)}
                </div>
                <div className="order-details__order-btns">
                    <OrderBtn title='Дублировать заказ' icon={orderAddBtn}
                        handleChange={() => onDuplicateOrder(orderDetails)} alt='Кнопка дублирования' />
                    <OrderBtn title='Отменить  заказ' icon={orderDeleteBtn}
                        handleChange={() => onRemoveOrder(orderDetails)} alt='Кнопка отмены' />
                </div>
            </>}
        </div>
    );
};

export default memo(OrderDetails);