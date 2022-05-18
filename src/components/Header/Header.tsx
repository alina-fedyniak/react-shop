import React from 'react';
import Logo from '../Logo';
import HeaderMenu from './HeaderMenu';
import { ShoppingBagIcon, SearchIcon }  from '../../assets/svg';
import {
    HeaderWrap,
    ShoppingBagStyled,
    StyledForm,
    StyledButton,
    StyledSearchIcon,
} from './styled';
import { FormInput } from '../common/Input';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    const handleSearch = () => {
      console.log('handleSearch')
    }

    return (
        <HeaderWrap>
            <Logo />
            <StyledForm>
                <StyledSearchIcon>
                    <SearchIcon />
                </StyledSearchIcon>
                <FormInput
                    placeholder={t('search.search_text')}
                    type='text'
                />
                <StyledButton
                    text={t('search.search_btn')}
                    onClick={handleSearch}
                />
            </StyledForm>
            <HeaderMenu />
            <ShoppingBagStyled>
                <ShoppingBagIcon />
            </ShoppingBagStyled>
        </HeaderWrap>
    )
};

export default Header;