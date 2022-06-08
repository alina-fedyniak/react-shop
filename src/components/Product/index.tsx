import React, { useEffect } from 'react';
import {
    StyledWrap,
    StyledBtn,
    StyledCartProduct,
    StyledPrice,
    StyledTitle,
    StyledDescription,
    StyledDescriptionTitle,
    StyledBlockPrice,
    StyledWrapper,
    StyledSpin,
} from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks';
import {IsLoaderSelector, OneProductSelector} from '../../redux/product/selector';
import { useParams } from 'react-router';
import { getOneProduct } from '../../redux/product/actions';
import { useTranslation } from 'react-i18next';
import Delivery from '../Delivery';
import { createCart } from '../../redux/cart/actions';
import Spin from 'antd/lib/spin';
import Images from '../common/Image';

const Product = (): JSX.Element => {
    const { t } = useTranslation();
    const { id }: any = useParams();
    const dispatch = useAppDispatch();
    const product = useAppSelector(OneProductSelector);
    const isLoader = useAppSelector(IsLoaderSelector);

    useEffect(() => {
        dispatch(getOneProduct(id));
    }, []);

    const handleAddToCart = () => {
        console.log('handleAddToCart')
        dispatch(createCart(id));
    };

    return (
        isLoader ?
            <StyledSpin>
                <Spin />
            </StyledSpin>
            :
        <StyledWrap>
            <StyledTitle>{product.title}</StyledTitle>
            <StyledCartProduct>
                {product.images ?
                    <Images images={product.images}/>
                    : ''
                }
                <StyledWrapper>
                    <StyledBlockPrice>
                        <StyledPrice>{product.price + '$'}</StyledPrice>
                        <StyledBtn
                            onClick={handleAddToCart}
                            text={t('cart_product.add_to_cart')}
                        />
                    </StyledBlockPrice>
                    <Delivery />
                </StyledWrapper>
            </StyledCartProduct>
            <StyledDescriptionTitle>
                {t('product_description.product_description')}
            </StyledDescriptionTitle>
            <StyledDescription>{product.description}</StyledDescription>
        </StyledWrap>
    )
}

export default Product;