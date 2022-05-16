import React from 'react';
import { useNavigate } from 'react-router';
import { RoutesPaths } from '../../constants/navigation';
import { LogoIcon }  from '../../assets/svg';
import {
    SvgWrap,
} from './styled'

const Logo = (): JSX.Element => {
    const navigate = useNavigate();

    const onLogoClick = () => {
        navigate(RoutesPaths.HOME);
    };

    return (
        <SvgWrap onClick={onLogoClick}>
           <LogoIcon  width='80px' />
        </SvgWrap>
    )
}

export default Logo;