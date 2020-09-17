import React, {FC} from 'react';
import {HeaderBlock, HeaderLink, HeaderLinkFixed, HeaderLogo, HeaderWrapper} from "./Header.styled";
import headerLogo from "../../assets/images/logo-PH_lockup.svg";

const Header: FC = ({headerRef, contactRef}) => {
    const executeScroll = () => contactRef
        && contactRef.current
        && window.scrollTo({
            top: contactRef.current.offsetTop - 100,
        })

    return (
        <>
            <HeaderLinkFixed
                onClick={executeScroll}
                className={'header-fixed'}
            >Contact</HeaderLinkFixed>
            <HeaderWrapper>
                <HeaderBlock
                    ref={headerRef}
                >
                    <HeaderLogo src={headerLogo}/>
                    <HeaderLink onClick={executeScroll}>Contact</HeaderLink>
                </HeaderBlock>
            </HeaderWrapper>
        </>
    )
}

export default Header;