import React from 'react';
import {
    StyledProductsPage,
    StyledWrap,
} from './styled';
import Products from '../components/Products';
import Accordion from '../components/common/Accordion';

const items = [
    {
        id: 1,
        title: 'This is panel 1',
        dropdownText: 'text',
    },
    {
        id: 2,
        title: 'This is panel 2',
        dropdownText: 'text',
    },
    {
        id: 3,
        title: 'This is panel 3',
        dropdownText: 'text',
    },
];

const CartProducts = () => {
    return (
        <StyledProductsPage>
            <Accordion items={items} />
            <StyledWrap>
                <Products />
            </StyledWrap>
        </StyledProductsPage>
    )
}

export default CartProducts