import React from 'react';
import {
    StyledWrap,
    StyledCartProduct,
    StyledImg,
    StyledTitle,
    StyledPrice,
    StyledBtn,
    StyledHard,
} from './styled';
import Rating from '../common/Rate';
import BlueMainButton from '../buttons/BlueMainButton';
import { useTranslation } from 'react-i18next';
import { HeartOutlined } from '@ant-design/icons';

type TProps = {
    product: any;
}

const CartProduct = ({ product }: TProps): JSX.Element => {
    const { t } = useTranslation();

    const handleAddToCart = () => {
      console.log('handleAddToCart')
    };

    return (
        <StyledWrap>
            <StyledCartProduct>
                <StyledHard>
                    <HeartOutlined />
                </StyledHard>
                <StyledImg src={product.image} />
                <StyledTitle>{product.title}</StyledTitle>
                <StyledPrice>{product.price + '$'}</StyledPrice>
                <StyledBtn>
                    <BlueMainButton
                        onClick={handleAddToCart}
                        text={t('cart_product.add_to_cart')}
                    />
                </StyledBtn>
                <Rating rating={product.rating}/>
            </StyledCartProduct>
        </StyledWrap>
    )
}

export default CartProduct;