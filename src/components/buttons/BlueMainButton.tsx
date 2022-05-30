import React, { ReactNode } from 'react'
import { StyledButton } from './styled'
import { COLORS } from '../../constants/colors'

type TProps = {
    text: string
    small?: boolean
    color?: string
    width?: string
    height?: string
    backgroundColor?: string
    backgroundColorOnHover?: string
    backgroundColorOnClick?: string
    backgroundColorOnDisabled?: string
    borderColor?: string
    onClick?: () => void
    icon?: ReactNode
    htmlType?: any
    disabled?: boolean
    style?: any
}

const BlueMainButton = ({
    icon,
    text,
    ...rest
}: TProps): JSX.Element => (
    <StyledButton
        {...rest}
    >
        {icon}
        {text}
    </StyledButton>
)

export default BlueMainButton
