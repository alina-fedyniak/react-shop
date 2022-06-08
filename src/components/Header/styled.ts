import styled from 'styled-components';
import { FormInput } from '../common/Input';
import { Button } from '../common/Button';
import { COLORS } from '../../constants/colors';

export const HeaderWrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: ${COLORS.LAVENDER};
`;

export const ShoppingBagStyled = styled.div`
  width: 30px;
  margin: 0 25px;
`;

export const HeaderMenuStyled = styled.div`
  display: flex;
  a {
    margin: 0 25px;
    color: ${COLORS.DARK_BLUE};
    font-weight: bold;
  }
`;

export const StyledSearchIcon = styled.div`
  position: absolute;
  z-index: 1;
  margin-left: 5px;
`;

export const StyledInput = styled(FormInput)`
  width: 100%;
`;

export const StyledForm = styled.div`
  display: flex;
  align-items: center;
  width: 40%;
`;

export const StyledButton = styled(Button)`
  margin: 0 3px;
  width: 20%;
`;