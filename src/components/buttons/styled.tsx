import { Button } from 'antd'
import styled from 'styled-components'
import { COLORS } from '../../constants/colors'

type TStyledButtonProps = {
    outline?: boolean
    small?: boolean
    backgroundColor?: string
    backgroundColorOnHover?: string
    backgroundColorOnClick?: string
    backgroundColorOnDisabled?: string
    width?: string
    height?: string
}

export const StyledButton = styled(Button)`
  padding: 10px 15px;
  border-radius: ${({ small }: TStyledButtonProps) => small ? '5px' : '10px'};
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ small }: TStyledButtonProps) => small ? '14px' : '16px'};
  line-height: 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }: TStyledButtonProps) => width || '100%'};
  height: ${({ height, small }: TStyledButtonProps) => height || (small ? '32px' : '40px')} !important;
  color: ${({ backgroundColor, outline }: TStyledButtonProps) => outline ? backgroundColor : COLORS.WHITE}  !important;
  border: ${({ backgroundColor, outline }: TStyledButtonProps) => outline ? `1px solid ${backgroundColor}` : 'none'}  !important;
  background-color: ${({ backgroundColor, outline }: TStyledButtonProps) => outline ? COLORS.WHITE : backgroundColor}  !important;

  &:hover{
    background-color: ${({
    outline, backgroundColorOnHover
}: TStyledButtonProps) => outline ? COLORS.WHITE : backgroundColorOnHover}  !important;
    color: ${({
    outline, backgroundColorOnHover
}: TStyledButtonProps) => outline ? backgroundColorOnHover : COLORS.WHITE}  !important;
    border: ${({
    outline, backgroundColorOnHover
}: TStyledButtonProps) => outline ? `1px solid ${backgroundColorOnHover}` : 'none'}  !important;
  }

  &:active {
    font-weight: bold;
    background-color: ${({
    outline, backgroundColorOnClick
}: TStyledButtonProps) => outline ? COLORS.WHITE : backgroundColorOnClick}  !important;
    color: ${({
    outline, backgroundColorOnClick
}: TStyledButtonProps) => outline ? backgroundColorOnClick : COLORS.WHITE}  !important;
    border: ${({
    outline, backgroundColorOnClick
}: TStyledButtonProps) => outline ? `2px solid ${backgroundColorOnClick}` : 'none'} !important;
  }

  &:disabled {
    background-color: ${({
    outline, backgroundColorOnDisabled
}: TStyledButtonProps) => outline ? COLORS.WHITE : backgroundColorOnDisabled} !important;
    color: ${({
    outline, backgroundColorOnDisabled
}: TStyledButtonProps) => outline ? backgroundColorOnDisabled : COLORS.WHITE} !important;
    border: ${({
    outline, backgroundColorOnDisabled
}: TStyledButtonProps) => outline ? `1px solid ${backgroundColorOnDisabled}` : 'none'} !important;
  }

  &:focus:not(:active) {
    background-color: ${({
    outline, backgroundColor
}: TStyledButtonProps) => outline ? COLORS.WHITE : backgroundColor}  !important;
    color: ${({
    outline, backgroundColor
}: TStyledButtonProps) => outline ? backgroundColor : COLORS.WHITE}  !important;
    border: ${({
    outline, backgroundColor
}: TStyledButtonProps) => outline ? `1px solid ${backgroundColor}` : 'none'}  !important;
  }
`
