import React from 'react';
import {
    ContactUsWrap,
    ContactUsBlock,
    StyledTitle,
    EmailWrap,
    StyledEmailTitle,
    StyledEmail,
    PhoneWrap,
    StyledPhoneTitle,
    StyledPhone,
    AddressWrap,
    StyledAddressTitle,
    StyledAddress,
} from './styled'

const ContactUs = (): JSX.Element => {

    return (
        <ContactUsWrap>
            <ContactUsBlock>
                <StyledTitle>Contact Us</StyledTitle>
                <EmailWrap>
                    <StyledEmailTitle>Email</StyledEmailTitle>
                    <StyledEmail>needhelp@organick.com</StyledEmail>
                </EmailWrap>
                <PhoneWrap>
                    <StyledPhoneTitle>Phone</StyledPhoneTitle>
                    <StyledPhone>123 (1254) 1452</StyledPhone>
                </PhoneWrap>
                <AddressWrap>
                    <StyledAddressTitle>Address</StyledAddressTitle>
                    <StyledAddress>88 Road, Brooklyn Street, USA</StyledAddress>
                </AddressWrap>
            </ContactUsBlock>
        </ContactUsWrap>
    )
}

export default ContactUs;