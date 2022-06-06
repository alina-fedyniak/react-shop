import React from 'react';
import {
    StyledWrap,
    CartBagTitle,
    StyledTitle,
    StyledBlockImg,
    StyledImg,
    StyledCount,
    StyledPrice,
} from './styled';
import { useTranslation } from 'react-i18next';
import { useAppSelector } from '../../hooks';
import { CreateCartSelector } from '../../redux/cart/selector';

const CartBag = (): JSX.Element => {
    const { t } = useTranslation();
    const cart = useAppSelector(CreateCartSelector);
    console.log(cart)

    const handleBuyProduct = () => {
        console.log('handleBuyProduct')
    };

    return (
        <StyledWrap>
            <CartBagTitle>Cart</CartBagTitle>
            <StyledBlockImg>
                <StyledImg />
            </StyledBlockImg>
            <StyledTitle></StyledTitle>
            <StyledPrice></StyledPrice>
            <StyledCount></StyledCount>
        </StyledWrap>
    )
}

export default CartBag;