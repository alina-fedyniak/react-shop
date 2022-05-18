import React, { ReactNode, ReactNodeArray } from 'react';
import { StyledButton } from './styled';

type TProps = {
  text: string,
  color?: string,
  width?: string,
  height?: string,
  backgroundColor?: string,
  borderColor?: string,
  onClick?: () => void,
  icon?: ReactNode | ReactNodeArray
  htmlType?: any,
  disabled?: boolean,
  style?: any
};
export const Button = ({ icon, text, ...rest }: TProps): JSX.Element => (
  <StyledButton {...rest}>
    {icon}
    {text}
  </StyledButton>
);
