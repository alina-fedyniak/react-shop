import React from 'react';
import {
    StyledWrap,
    StyledCartProduct,
    StyledImg,
    StyledTitle,
    StyledPrice,
} from './styled';
import Rating from '../common/Rate';

type TProps = {
    product: any;
}

const CartProduct = ({ product }: TProps): JSX.Element => {
console.log(product)

    return (
        <StyledWrap>
            <StyledCartProduct>
                <StyledImg src={product.image} />
                <StyledTitle>{product.title}</StyledTitle>
                <StyledPrice>{product.price + '$'}</StyledPrice>
                <Rating />
            </StyledCartProduct>
        </StyledWrap>
    )
}

export default CartProduct;