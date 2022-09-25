import React, {useEffect, useState} from 'react';
import './styles/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostIdPage from "./pages/PostIdPage";
import Login from "./pages/Login";



function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                {/*<AppRouter />*/}

                         <Routes>
                            <Route path="/" element={<Layout/>}>
                                <Route index element={<HomePage/>} />
                                <Route path="about" element={<About/>} />
                                <Route path="posts" element={<Posts/>} />
                                <Route path="posts/:id" element={<PostIdPage/>} />
                            </Route>
                        </Routes>
                }

            </BrowserRouter>
        </AuthContext.Provider>
    )
}

export default App;

