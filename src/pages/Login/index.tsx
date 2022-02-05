import { memo, SyntheticEvent, useEffect, useState } from "react";
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from "react-redux";
import 'react-toastify/dist/ReactToastify.css';

import { fetchUsers, setUser } from "../../store/actionCreators/users";
import { selectUsers } from "../../store/selectors/users";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { useNavigate } from 'react-router-dom';

import './Login.scss';

toast.configure();

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);

  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: SyntheticEvent) => {
    e.preventDefault();

    const loggedInUser = users?.find((user) => user.login === login && user.password === password);

    if (!login || !password) {
      setError('error');
      return;
    };

    if (loggedInUser) {
      toast.success("Авторизация успешна", {
        position: toast.POSITION.TOP_CENTER,
      });

      navigate('/orders');
      localStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
      dispatch(setUser(loggedInUser));

      setLogin('');
      setPassword('');
      setError(null);
    } else {
      toast.error("Неправильный логин или пароль, повторите попытку", {
        position: toast.POSITION.TOP_CENTER,
      });

      setLogin('');
      setPassword('');
      setError(null);
    };
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="login">
      <h1 className="login__title">Добро пожаловать!</h1>
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
    </div>
  );
};

export default memo(Login);