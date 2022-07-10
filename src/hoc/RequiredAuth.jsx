import React from 'react';
import {useLocation} from "react-router-dom";
import {Navigate} from "react-router";

const RequiredAuth = ({children}) => {
    const location = useLocation();
    const auth = false;

    if(!auth) {
        return <Navigate to='/login' state={{from: location}}/>
    }

    return children;
};

export {RequiredAuth};