import { Route, Routes, useNavigate } from 'react-router-dom'
import { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { setUser } from './store/actionCreators/users';

import Details from './pages/Details';
import Login from './pages/Login';
import Orders from './pages/Orders/Orders';

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
    <div className="container">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='orders' element={<Orders />} />
        <Route path='orders/:id' element={<Details />} />
      </Routes>
    </div>
  );
}

export default memo(App);


