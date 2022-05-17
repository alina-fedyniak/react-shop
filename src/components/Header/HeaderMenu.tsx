import React from 'react';
import { RoutesPaths } from '../../constants/navigation';
import { NavLink } from 'react-router-dom';
import {
    HeaderMenuStyled,
} from './styled';

const HeaderMenu = () => {
    return (
        <HeaderMenuStyled>
            <NavLink to={RoutesPaths.HOME}>
                <div>Home</div>
            </NavLink>
            <NavLink to={RoutesPaths.PRODUCTS}>
                <div>Product</div>
            </NavLink>
            <NavLink to={RoutesPaths.CONTACTS}>
                <div>Contacts</div>
            </NavLink>
        </HeaderMenuStyled>
    )
};

export default HeaderMenu;