import React from "react";
import PostIdPage from "../pages/PostIdPage";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import HomePage from "../pages/HomePage";



export const privateRoutes = [
    {path: '/', component: <HomePage/>, index: 'index'},
    {path: '*', component: <NotFound/>},
    {path: '/about', component: <About/>},
    {path: '/posts', component: <Posts/>},
    {path: '/posts/:id', component: <PostIdPage/>,},
]

export const publicRoutes = [
    {path: '/login', component: <Login/>},
]