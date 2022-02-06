import { Route, Routes, useNavigate } from 'react-router-dom'
import { memo, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setUser } from './store/actionCreators/users';

import Login from './pages/Login';
import OrderDetails from './pages/OrderDetails';
import Orders from './pages/Orders';

import './App.scss';

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loggedInUser = localStorage.getItem('loggedInUser');

  useEffect(() => {
    if (loggedInUser) {
      const parsedLoggedInUser = JSON.parse(loggedInUser);
      dispatch(setUser(parsedLoggedInUser));
      // navigate('/orders');
    }
    else {
      navigate('/')
    }
  }, [dispatch, loggedInUser]);



  return (
    <div className="main">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='orders' element={<Orders />} />
        <Route path='orders/:id' element={<OrderDetails />} />
      </Routes>
    </div>
  );
};

export default memo(App);


