import React from 'react';
import {
    StyledWrap,
} from './styled';
import Products from '../components/Products';

const ProductsPage = () => {
    return (
        <>
            <StyledWrap>
                Products
                <Products />
            </StyledWrap>
        </>
    )
}

export default ProductsPage