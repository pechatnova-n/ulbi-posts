import React from "react";
import Navbar from "../components/UI/Navbar/Navbar";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <Navbar/>
            <div className="outlet">
                <Outlet />
            </div>
            <footer>2022</footer>
        </>
    );
};

export default Layout;