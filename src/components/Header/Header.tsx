import React, {FC} from 'react';
import {HeaderBlock, HeaderLink, HeaderLinkFixed, HeaderLogo, HeaderWrapper} from "./Header.styled";
import headerLogo from "../../assets/images/logo-PH_lockup.svg";

const scrollToRef = (ref) => {
    ref && ref.current && ref.current.scrollIntoView({block:    "start" ,behavior: 'smooth'})
}
const Header: FC = ({headerViewProgress, contactRef}) => {

    const executeScroll = () => scrollToRef(contactRef)

    return (
        <>
            <HeaderLinkFixed onClick={executeScroll}>Contact</HeaderLinkFixed>
            <HeaderWrapper>
                <HeaderBlock

                    style={{
                        top: headerViewProgress <= 1
                            ? String((1 - headerViewProgress) * (-100)) + '%'
                            : '0'
                    }}
                >
                    <HeaderLogo src={headerLogo}/>
                    <HeaderLink onClick={executeScroll}>Contact</HeaderLink>
                </HeaderBlock>
            </HeaderWrapper>
        </>
    )
}

export default Header;