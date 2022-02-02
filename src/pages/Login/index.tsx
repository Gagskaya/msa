import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

import './Login.scss'

export const Login = () => {
  return <div className="login">
    <h1 className="login__title" >Добро пожаловать!</h1>
    <div className="login__inputs">
      <Input placeholder='Логин' className='login__inputs-login' />
      <Input placeholder='Пароль' className='login__inputs-password' />
    </div>
    <div className="login__button">
      <Button title='ВОЙТИ' />
    </div>
  </div>;
};
