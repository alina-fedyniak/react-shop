import styled from 'styled-components';
import { COLORS } from '../../constants/colors';
import { Button } from '../common/Button';

export const StyledWrap = styled.div`
  font-family: 'Montserrat';
  box-shadow: 0 0 15px 0 rgba(230 230 250);
  width: 250px;
  padding: 20px;
  text-align: center;
  background: ${COLORS.WHITE};
  margin: 10px;
  border-radius: 30px;
  color: ${COLORS.DARK_BLUE};
`;

export const StyledHard = styled.div`
  position: relative;
  left: 90px;
  font-size: 20px;
`;

export const StyledCartProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

export const StyledImg = styled.img`
  width: 100%;
  flex: 0 0 auto;
  height: 150px;
`;

export const StyledTitle = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 35px;
  margin-top: 25px;
  color: ${COLORS.DARK_BLUE};
`;

export const StyledContent = styled.div`
  flex: 1 0 auto;
`;

export const StyledBtn = styled(Button)`
  
`;

export const StyledPrice = styled.div`
  font-size: 19px;
  flex: 0 0 auto;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  border-top: 1px solid ${COLORS.LAVENDER};
  width: 100%;
`;
