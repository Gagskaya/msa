import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { OrderCard } from '../../components/OrderCard';
import { fetchOrders } from '../../store/actionCreators/orders';
import { selectFilteredOrders } from '../../store/selectors/orders';
import { selectUsers } from '../../store/selectors/users';
import { Order } from '../../types/order';

import './Orders.scss';

const Orders = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const orders = useSelector(selectFilteredOrders);
    const user = useSelector(selectUsers);
    console.log(user);
    useEffect(() => {
        dispatch(fetchOrders());

    }, [dispatch]);

    const signOut = () => {
        localStorage.removeItem('loggedInUser');
        navigate('/');
    }
    return (
        <div className="orders">
            <button className='sign-out' onClick={signOut}>Выйти</button>
            <div className="orders__title">
                <h2>Мои заказы</h2>
                <span>{orders?.length}</span>
            </div>
            <div className="orders__cards">
                {orders?.map((order: Order) => <OrderCard key={order.id} order={order} />)}
            </div>
        </div>
    )
};

export default memo(Orders)