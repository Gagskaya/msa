import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { OrderCard } from '../../components/OrderCard';
import { setOrderDetails } from '../../store/actionCreators/orderDetails';
import { fetchOrders } from '../../store/actionCreators/orders';
import { selectOrders, selectOrdersLoadingStatus } from '../../store/selectors/orders';
import { selectUser } from '../../store/selectors/users';
import { LoadingStatus } from '../../types/loadingStatus';
import { Order } from '../../types/order';

import './Orders.scss';

const Orders = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orders = useSelector(selectOrders);
    const user = useSelector(selectUser);
    const loadingStatus = useSelector(selectOrdersLoadingStatus);

    const onSignOut = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/');
    };

    const onShowDetails = (order: Order) => {
        navigate(`/orders/${order.id}`);
        dispatch(setOrderDetails(order));
    };

    useEffect(() => {
        if (user) {
            dispatch(fetchOrders(user.id));
        }
    }, [dispatch, user]);

    return (
        <div className="orders">
            <button className='sign-out' onClick={onSignOut}>Выйти</button>
            <div className="orders__title">
                <h2>Мои заказы</h2>
                <span>{orders?.length}</span>
            </div>
            {loadingStatus === LoadingStatus.LOADING ? <div>Загрузка...</div> : <div className="orders__cards">
                {orders?.map((order: Order) =>
                    <OrderCard order={order} key={order.id} onShowDetails={onShowDetails} />)}
            </div>}

        </div>
    );
};

export default memo(Orders);