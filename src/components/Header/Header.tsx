import React, {FC, RefObject} from 'react';
import {HeaderBlock, HeaderLink, HeaderLinkFixed, HeaderLogo, HeaderWrapper} from "./Header.styled";
import headerLogo from "../../assets/images/logo-PH_lockup.svg";

interface IProps {
    headerRef: RefObject<HTMLDivElement> | null,
    contactRef: RefObject<HTMLDivElement> | null
}

const Header: FC<IProps> = ({headerRef, contactRef}) => {
    const executeScroll = () => window.scrollTo({
        top: contactRef && contactRef.current && contactRef.current.offsetTop - 100 || 0,
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