import { Route, Routes } from 'react-router-dom'
import { memo } from 'react';

import Details from './pages/Details';
import Login from './pages/Login';
import Orders from './pages/Orders/Orders';

import './App.scss'

function App() {

  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='orders' element={<Orders />} />
        <Route path='details' element={<Details />} />
      </Routes>
    </div>
  );
}

export default memo(App);
