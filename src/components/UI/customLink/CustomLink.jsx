import React from 'react';
import {Link, useMatch} from "react-router-dom";

const CustomLink = ({children, to, ...props}) => {
    const match = useMatch(to);

    return (
        <Link
            to={to}
            style={{
                fontWeight: match ? 'bold' : 'normal'
            }}
            {...props}>
            {children}
        </Link>
    );
};

export {CustomLink};