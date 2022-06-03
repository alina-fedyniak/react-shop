import React from 'react';
import {
    StyledWrap,
} from './styled';
import { useTranslation } from 'react-i18next';


const CartBag = (): JSX.Element => {
    const { t } = useTranslation();

    return (
        <StyledWrap>
            CartBag
        </StyledWrap>
    )
}

export default CartBag;