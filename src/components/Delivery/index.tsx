import React from 'react';
import {
    DeliveryWrap,
    StyledDeliveryWrap,
    StyledTitle,
    StyledPickup,
    StyledPost,
    StyledСourier,
    StyledPickupText,
    StyledPickupPrice,
    StyledPostText,
    StyledPostPrice,
    StyledСourierText,
    StyledСourierPrice,
    DeliveryBlock,
} from './styled'

const Delivery = (): JSX.Element => {

    return (
        <DeliveryWrap>
            <StyledTitle>Delivery:</StyledTitle>
            <StyledDeliveryWrap>
                <DeliveryBlock>
                    <StyledPickup>Pickup from the store</StyledPickup>
                    <StyledPickupText>Pick up July 5 from 14:00</StyledPickupText>
                    <StyledPickupPrice>is free</StyledPickupPrice>
                </DeliveryBlock>
                <DeliveryBlock>
                    <StyledPost>Pickup from post offices</StyledPost>
                    <StyledPostText>will ship on July 4th</StyledPostText>
                    <StyledPostPrice>100$</StyledPostPrice>
                </DeliveryBlock>
                <DeliveryBlock>
                    <StyledСourier>Courier delivery</StyledСourier>
                    <StyledСourierText>Pick up July 5 from 10:00</StyledСourierText>
                    <StyledСourierPrice>150$</StyledСourierPrice>
                </DeliveryBlock>
            </StyledDeliveryWrap>
        </DeliveryWrap>
    )
}

export default Delivery;