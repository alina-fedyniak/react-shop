import React from 'react';
import Logo from '../Logo';
import HeaderMenu from './HeaderMenu';
import {
    HeaderWrap,
} from './styled';

const Header = () => {
    return (
        <HeaderWrap>
            <Logo />
            <HeaderMenu />
        </HeaderWrap>
    )
};

export default Header;