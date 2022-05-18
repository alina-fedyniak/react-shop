import React from 'react';
import {
    StyledWrap,
    StyledText,
    StyledSotialLinks,
} from './styled'
import Logo from '../Logo';
import { InstagramIcon, WhatsappIcon }  from '../../assets/svg';

const FooterLogoAbout = (): JSX.Element => {

    return (
        <StyledWrap>
           <Logo />
            <StyledText>
                We are a popular and farming company
                aspiring to be a leader in the Organic food industry.
            </StyledText>
            <StyledSotialLinks>
                <InstagramIcon />
                <WhatsappIcon />
                <InstagramIcon />
                <WhatsappIcon />
            </StyledSotialLinks>
        </StyledWrap>
    )
}

export default FooterLogoAbout;