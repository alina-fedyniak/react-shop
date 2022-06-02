import styled from 'styled-components';
import BlueMainButton from '../buttons/BlueMainButton';
import {COLORS} from '../../constants/colors';

export const StyledWrap = styled.div`
  color: ${COLORS.DARK_BLUE};
  padding: 20px;
`;

export const StyledCartProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;


export const StyledTitle = styled.h1`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  line-height: 35px;
  margin-top: 25px;
  color: ${COLORS.DARK_BLUE};
  margin-bottom: 30px;
`;

export const StyledImg = styled.img`
  width: 50%;
`;

export const StyledBlockImg = styled.div`
  
`;

export const StyledBlockPrice = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid lavender;
  border-radius: 8px;
  padding: 20px 99px;
`;

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const StyledPrice = styled.div`
  font-size: 30px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  text-align: center;
  width: 100%;
`;

export const StyledBtn = styled(BlueMainButton)`
  
`;

export const StyledDescriptionTitle = styled.h2`
  margin-top: 20px;
  color: ${COLORS.DARK_BLUE};
`;

export const StyledDescription = styled.p`
  font-size: 14px;
  width: 50%;
`;
