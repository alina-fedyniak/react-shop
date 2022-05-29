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
    backgroundColor,
    backgroundColorOnHover,
    backgroundColorOnClick,
    backgroundColorOnDisabled,
    ...rest
}: TProps): JSX.Element => (
    <StyledButton
        backgroundColor={backgroundColor || COLORS.DARK_BLUE}
        backgroundColorOnHover={backgroundColorOnHover || COLORS.MAIN_BLUE}
        backgroundColorOnClick={backgroundColorOnClick || COLORS.PHTHALO_BLUE}
        backgroundColorOnDisabled={backgroundColorOnDisabled || COLORS.BLUE_BELL}
        {...rest}
    >
        {icon}
        {text}
    </StyledButton>
)

export default BlueMainButton
