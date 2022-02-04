import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { OrderCard } from '../../components/OrderCard';
import { setDetails } from '../../store/actionCreators/details';
import { fetchOrders } from '../../store/actionCreators/orders';
import { selectOrders } from '../../store/selectors/orders';
import { selectLoggedInUser } from '../../store/selectors/users';
import { Order } from '../../types/order';

import './Orders.scss';

const Orders = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orders = useSelector(selectOrders);
    const user = useSelector(selectLoggedInUser);

    useEffect(() => {
        dispatch(fetchOrders(user?.id));
    }, [dispatch, user]);

    const signOut = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/');
    };

    const showDetails = (order: Order) => {
        dispatch(fetchOrders(user?.id, `&id=${order.id}`));
        navigate(`/orders/${order.id}`);
        dispatch(setDetails(order));
    };

    return (
        <div className="orders">
            <button className='sign-out' onClick={signOut}>Выйти</button>
            <div className="orders__title">
                <h2>Мои заказы</h2>
                <span>{orders?.length}</span>
            </div>
            <div className="orders__cards">
                {orders?.map((order: Order) => <div className="order-card" key={order.id} onClick={() => showDetails(order)}>
                    <OrderCard order={order} />
                </div>)}
            </div>
        </div>
    )
};

export default memo(Orders);