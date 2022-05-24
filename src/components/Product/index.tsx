import React, { useEffect } from 'react';
import {
    StyledWrap,
    StyledImg,
} from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks';
//import { OneProductSelector } from '../../redux/product/selector';
import { useParams } from 'react-router';
import { getOneProduct } from '../../redux/product/actions';

const Product = (): JSX.Element => {
    const {id}: any = useParams();
    const dispatch = useAppDispatch();
    //const { loader, info } = useAppSelector(OneProductSelector);

    useEffect(() => {
        dispatch(getOneProduct(id));
    }, []);

    return (
        <StyledWrap>
            <StyledImg />
        </StyledWrap>
    )
}

export default Product;