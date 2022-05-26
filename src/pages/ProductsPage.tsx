import React from 'react';
import {
    StyledProductsPage,
    StyledWrap,
} from './styled';
import Products from '../components/Products';
import Accordion from '../components/common/Accordion';

const ProductsPage = () => {
    return (
        <StyledProductsPage>
            <Accordion />
            <StyledWrap>
                <Products />
            </StyledWrap>
        </StyledProductsPage>
    )
}

export default ProductsPage