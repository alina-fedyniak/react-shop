import React, { useEffect } from 'react';
import {
    StyledWrap,
    StyledImg,
} from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ProductsSelector } from '../../redux/product/selector';
import { getAllProduct } from '../../redux/product/actions';

const Product = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const getProducts = useAppSelector(ProductsSelector);
    console.log(getProducts)

    useEffect(() => {
        dispatch(getAllProduct());
    }, []);

    return (
        <StyledWrap>
            <StyledImg />
        </StyledWrap>
    )
}

export default Product;