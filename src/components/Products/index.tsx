import React, { useEffect } from 'react';
import {
    StyledWrap,
} from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { ProductsSelector } from '../../redux/product/selector';
import { getAllProducts } from '../../redux/product/actions';
import CartProduct from '../CartProduct';

const Products = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const productsState = useAppSelector(ProductsSelector);

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);

    return (
        <StyledWrap>
            {productsState.productsData.products.map((product: any, index: number) => {
                return <CartProduct key={index} product={product}/>
            })}
        </StyledWrap>
    )
}

export default Products;