import React, {useContext} from 'react';
import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    const login = event => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true')
        console.log(isAuth)
    }

    return (
        <div>
            <h1>Страница логина</h1>
            <form onSubmit={login}>
                <MyInput type="text" placeholder="Введите логин"/>
                <MyInput type="password" placeholder="Введите пароль"/>
                <p>Логинизация работает в тестовом режиме, для входа нажмите кнопку "Войти"</p>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;