import React from 'react';
import Logo from '../Logo';
import HeaderMenu from './HeaderMenu';
import { ShoppingBagIcon, SearchIcon }  from '../../assets/svg';
import {
    HeaderWrap,
    ShoppingBagStyled,
} from './styled';
import { FormInput } from '../common/Input';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <HeaderWrap>
            <Logo />
            <FormInput
                placeholder={t('search.search_text')}
                type='text'
            />
            <HeaderMenu />
            <ShoppingBagStyled>
                <ShoppingBagIcon />
            </ShoppingBagStyled>
        </HeaderWrap>
    )
};

export default Header;