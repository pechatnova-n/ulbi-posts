import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Login from "../pages/Login";
import Loader from "./UI/loader/Loader";


const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
        ? <Routes>
                {privateRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                 <Route element={<Login/>} path='/login' />
            </Routes>
        : <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}
                <Route element={<Login/>} path='/login' />
            </Routes>
    );
};

export default AppRouter;