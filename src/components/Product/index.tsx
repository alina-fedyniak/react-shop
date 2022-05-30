import React, { useEffect } from 'react';
import {
    StyledWrap,
    StyledImg,
} from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OneProductSelector } from '../../redux/product/selector';
import { useParams } from 'react-router';
import { getOneProduct } from '../../redux/product/actions';
import {
    StyledBtn,
    StyledCartProduct,
    StyledPrice,
    StyledTitle
} from '../CartProduct/styled';
import BlueMainButton from '../buttons/BlueMainButton';
import { useTranslation } from 'react-i18next';

const Product = (): JSX.Element => {
    const { t } = useTranslation();
    const { id }: any = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector(OneProductSelector);
    console.log(product)

    useEffect(() => {
        dispatch(getOneProduct(id));
    }, []);

    const handleAddToCart = () => {
        console.log('handleAddToCart')
    };

    return (
        <StyledWrap>
            <StyledCartProduct>
                    <StyledImg src={product.product.image} />
                    <StyledTitle>{product.product.title}</StyledTitle>
                <StyledPrice>{product.product.price + '$'}</StyledPrice>
                <StyledBtn>
                    <BlueMainButton
                        onClick={handleAddToCart}
                        text={t('cart_product.add_to_cart')}
                    />
                </StyledBtn>
            </StyledCartProduct>
        </StyledWrap>
    )
}

export default Product;