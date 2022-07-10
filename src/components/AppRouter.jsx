import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import {AuthContext} from "../context";
import Login from "../pages/Login";
import Loader from "./UI/loader/Loader";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";




const AppRouter = () => {
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext);

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
        ? <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>} />
                <Route path="about" element={<About/>} />
                <Route path="posts" element={<Posts/>} />
                <Route path="posts/:id" element={<PostIdPage/>} />
            </Route>
            {/*<Navigate to="login" replace={true} />*/}

        </Routes>
        : <Routes>
                <Route path="login" element={<Login/>} />
          </Routes>

    );
};

export default AppRouter;

/*
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
);*/
