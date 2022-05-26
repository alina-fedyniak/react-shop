import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

export const StyledWrap = styled.div`
  box-shadow: 0 0 15px 0 rgba(230 230 250);
  width: 250px;
  padding: 20px;
  text-align: center;
  background: ${COLORS.WHITE};
  margin: 10px;
  border-radius: 30px;
`;

export const StyledCartProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

export const StyledImg = styled.img`
  width: 75%;
  flex: 0 0 auto;
  height: 150px;
`;

export const StyledTitle = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 35px;
  margin-top: 25px;
  flex: 1 0 auto;
`;

export const StyledPrice = styled.div`
  flex: 0 0 auto;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  color: ${COLORS.DARK_BLUE};
  border-top: 1px solid ${COLORS.LAVENDER};
  width: 100%;
`;
