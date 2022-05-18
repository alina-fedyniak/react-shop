import { Button } from 'antd';
import styled from 'styled-components';
import { COLORS } from '../../../constants/colors';

type TProps = {
  borderColor?: string
  backgroundColor?: string
  width?: string
  height?: string
};
export const StyledButton = styled(Button)`
  padding: 10px 15px;
  border-radius: 6px;
  font-size: 14px;
  line-height: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${props => props.width || '100%'};
  height: ${props => props.height || 'auto'};
  color: ${props => props.color || COLORS.WHITE};
  border: ${(props:TProps) => props.borderColor || COLORS.WHITE};
  background-color: ${(props:TProps) => props.backgroundColor || COLORS.LIGHT_GREEN};
  &:hover{
    background-color: ${(props:TProps) => props.backgroundColor || COLORS.DARK_GREEN};
    color: ${props => props.color || COLORS.WHITE};
    border: ${(props:TProps) => props.borderColor || COLORS.WHITE};
    opacity: 0.8;
  }
  &:focus{
    background-color: ${(props:TProps) => props.backgroundColor || COLORS.DARK_GREEN};
    color: ${props => props.color || COLORS.WHITE};
  }
`;
