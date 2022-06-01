import React from 'react';
import {
    StyledWrap,
    StyledCartProduct,
    StyledImg,
    StyledTitle,
    StyledPrice,
    StyledBtn,
    StyledHard,
    StyledContent,
} from './styled';
import Rating from '../common/Rate';
import {useTranslation} from 'react-i18next';
import {HeartOutlined} from '@ant-design/icons';
import {NavLink} from 'react-router-dom';
import {RoutesPaths} from '../../constants/navigation';

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
                <StyledContent>
                    <NavLink to={RoutesPaths.PRODUCT.replace(':id', '' + product.id)}>
                        <StyledImg src={product.image} />
                        <StyledTitle>{product.title}</StyledTitle>
                    </NavLink>
                </StyledContent>
                <StyledPrice>{product.price + '$'}</StyledPrice>
                <StyledBtn
                    onClick={handleAddToCart}
                    text={t('cart_product.add_to_cart')}
                />
                <Rating rating={product.rating} />
            </StyledCartProduct>
        </StyledWrap>
    )
}

export default CartProduct;