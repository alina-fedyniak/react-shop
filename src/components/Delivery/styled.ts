import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const DeliveryWrap = styled.div`
  border: 1px solid lavender;
  border-radius: 8px;
  margin-top: 10px;
  color: ${COLORS.DARK_BLUE};
  p {
    margin: 0;
  }
`;

export const StyledDeliveryWrap = styled.div`
  
`;

export const StyledTitle = styled.h2`
  color: ${COLORS.DARK_BLUE};
  padding: 10px 20px;
  margin: 0;
`;

export const DeliveryBlock = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lavender;
  padding: 10px 15px;
  height: 60px;
  svg {
    width: 35px;
  }
`;

export const StyledPickup = styled.p`
  width: 160px;
`;

export const StyledPickupText = styled.p`
  width: 160px;
`;

export const StyledPickupPrice = styled.p`
  width: 50px;

`;

export const StyledPost = styled.p`
  width: 160px;
`;

export const StyledPostText = styled.p`
  width: 160px;
`;

export const StyledPostPrice = styled.p`
  width: 50px;
`;

export const StyledСourier = styled.p`
  width: 160px;
`;

export const StyledСourierText = styled.p`
  width: 160px;
`;

export const StyledСourierPrice = styled.p`
  width: 50px;
`;
