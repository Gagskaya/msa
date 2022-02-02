import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom'

import { Details } from './pages/Details';
import { Login } from './pages/Login';
import { Orders } from './pages/Orders/Orders';

import axios from 'axios';
import './App.scss'



function App() {
  const [users, setUsers] = useState<any>(null);

  useEffect(() => {
    axios.get('./data/clients.json').then(({ data }) => {
      setUsers(data);
    })
  }, [])
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
