import { memo, useState } from "react";
import { toast } from 'react-toastify'

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './Login.scss'
import { User } from "../../types/user";

interface LoginProps {
  users: User[] | null
}

toast.configure();

const Login: React.FC<LoginProps> = ({ users }) => {

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  const onSubmit = (e: any) => {
    e.preventDefault();

    const isAuth = users?.find((user: User) => user.login === login && user.password === password);

    if (!login || !password) {
      setError('error');
      return;
    }
    if (isAuth) {
      toast.success("Авторизация успешна", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLogin('');
      setPassword('');
      setError(null);
      navigate('/orders')
    }
    else {
      toast.error("Неправильный логин или пароль", {
        position: toast.POSITION.TOP_CENTER,
      });
      setLogin('');
      setPassword('');
      setError(null);
    }
  }

  return <div className="login">
    <h1 className="login__title" >Добро пожаловать!</h1>
    <form onSubmit={onSubmit} >
      <div className="login__inputs">
        <Input placeholder='Логин' className='login__inputs-login' value={login} onChange={setLogin} type='text' error={error} />
        <Input placeholder='Пароль' className='login__inputs-password' value={password} onChange={setPassword} type="password" error={error} />
        {error === 'error' && <p className="login__inputs-error">Оба поля должны быть заполнены</p>}

      </div>
      <div className="login__button">
        <Button title='ВОЙТИ' type='submit' />
      </div>
    </form>

  </div>;
};

export default memo(Login)