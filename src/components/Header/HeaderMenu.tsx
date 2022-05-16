import React from 'react';
import { RoutesPaths } from '../../constants/navigation';
import { NavLink } from 'react-router-dom';

const HeaderMenu = () => {
    return (
        <>
            <NavLink to={RoutesPaths.HOME}>
                <div>Home</div>
            </NavLink>
            <NavLink to={RoutesPaths.PRODUCTS}>
                <div>Product</div>
            </NavLink>
            <NavLink to={RoutesPaths.CONTACTS}>
                <div>Contacts</div>
            </NavLink>
        </>
    )
};

export default HeaderMenu;