import React, {useContext} from 'react';
import cl from "./Navbar.module.css";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import {CustomLink} from "../customLink/CustomLink";


const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout =() => {
        setIsAuth(false);
        localStorage.removeItem('auth')
    }


    return (
        <div className={cl.navbar}>
            <MyButton
                onClick={logout}>
                Выйти
            </MyButton>
            <div className={cl.navbar__links}>
                <CustomLink to="/">Главная</CustomLink>
                <CustomLink to="/posts">Посты</CustomLink>
                <CustomLink to="/about">О сайте</CustomLink>
            </div>
        </div>
    );
};

export default Navbar;