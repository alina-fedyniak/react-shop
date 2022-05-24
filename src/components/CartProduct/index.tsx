import React from 'react';
import {
    StyledWrap,
    StyledCartProduct,
    StyledImg,
    StyledTitle,
    StyledPrice,
    StyledRating,
} from './styled';

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
                <StyledPrice>{product.price}</StyledPrice>
                <StyledRating>{product.rating.rate}</StyledRating>
            </StyledCartProduct>
        </StyledWrap>
    )
}

export default CartProduct;