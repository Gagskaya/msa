import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { OrderCard } from '../../components/OrderCard';
import { fetchOrders } from '../../store/actionCreators/orders';
import { setLoggedInUser } from '../../store/actionCreators/users';
import { selectFilteredOrders, selectOrders } from '../../store/selectors/orders';
import { Order } from '../../types/order';

import './Orders.scss';

const Orders = () => {
    const dispatch = useDispatch();
    const loggedInUser = localStorage.getItem('loggedInUser');
    const orders = useSelector(selectFilteredOrders);

    useEffect(() => {
        dispatch(fetchOrders());

    }, [dispatch]);

    useEffect(() => {
        if (loggedInUser) {
            const parsedLoggedInUser = JSON.parse(loggedInUser)
            dispatch(setLoggedInUser(parsedLoggedInUser))
        }
    }, [dispatch, loggedInUser]);
    return <div className="orders">
        <div className="orders__title">
            <h2>Мои заказы</h2>
            <span>{orders?.length}</span>
        </div>
        <div className="orders__cards">
            {orders?.map((order: Order, i: any) => <OrderCard key={i} />)}
        </div>
    </div>;
};

export default memo(Orders)