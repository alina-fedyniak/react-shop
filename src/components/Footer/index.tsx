import React from 'react';
import {
    FooterWrap,
} from './styled'
import ContactUs from '../ContactUs';
import FooterLogoAbout from '../FooterLogoAbout';
import FooterUtilityPages from '../FooterUtilityPages';

const Footer = (): JSX.Element => {

    return (
        <FooterWrap>
            <ContactUs />
            <FooterLogoAbout />
            <FooterUtilityPages />
        </FooterWrap>
    )
}

export default Footer;