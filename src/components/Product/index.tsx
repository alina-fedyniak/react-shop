import React, { useEffect } from 'react';
import {
    StyledWrap,
    StyledImg,
    StyledBtn,
    StyledCartProduct,
    StyledPrice,
    StyledTitle,
    StyledDescription,
    StyledDescriptionTitle,
    StyledBlockImg,
    StyledBlockPrice,
} from './styled'
import { useAppDispatch, useAppSelector } from '../../hooks';
import { OneProductSelector } from '../../redux/product/selector';
import { useParams } from 'react-router';
import { getOneProduct } from '../../redux/product/actions';
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
            <StyledTitle>{product.title}</StyledTitle>
            <StyledCartProduct>
                <StyledBlockImg>
                    <StyledImg src={product.image}/>
                </StyledBlockImg>
                <StyledBlockPrice>
                    <StyledPrice>{product.price + '$'}</StyledPrice>
                    <StyledBtn
                        onClick={handleAddToCart}
                        text={t('cart_product.add_to_cart')}
                    />
                </StyledBlockPrice>
            </StyledCartProduct>
            <StyledDescriptionTitle>
                {t('product_description.product_description')}
            </StyledDescriptionTitle>
            <StyledDescription>{product.description}</StyledDescription>
        </StyledWrap>
    )
}

export default Product;