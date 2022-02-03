import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'

import Details from './pages/Details';
import Login from './pages/Login';
import Orders from './pages/Orders/Orders';

import './App.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './store/actionCreators/users';
import { selectUsers } from './store/selectors/users';



function App() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Login users={users} />} />
        <Route path='orders' element={<Orders />} />
        <Route path='details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
