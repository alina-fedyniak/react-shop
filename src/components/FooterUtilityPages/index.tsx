import React from 'react';
import {
    StyledUtilityWrap,
    StyledUtilityTitle,
    StyledGuide,
    StyledProtected,
    StyledPageNotFound,
    StyledChangelog,
    StyledLicenses,
} from './styled'

const FooterUtilityPages = (): JSX.Element => {

    return (
        <StyledUtilityWrap>
            <StyledUtilityTitle>Utility Pages</StyledUtilityTitle>
            <StyledGuide>Style Guide</StyledGuide>
            <StyledProtected>Protected</StyledProtected>
            <StyledPageNotFound>Page Not Found</StyledPageNotFound>
            <StyledChangelog>Changelog</StyledChangelog>
            <StyledLicenses>Licenses</StyledLicenses>
        </StyledUtilityWrap>
    )
}

export default FooterUtilityPages;