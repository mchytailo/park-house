import React, {FC} from 'react';
import {HeaderBlock, HeaderLink, HeaderLinkFixed, HeaderLogo, HeaderWrapper} from "./Header.styled";
import headerLogo from "../../assets/images/logo-PH_lockup.svg";

const scrollToRef = (c, e) => {
    let b;
    let d = easeOutCuaic;
    let a = document.documentElement;
    if (0 === a.scrollTop) {
        b = a.scrollTop;
        ++a.scrollTop;
        a = b + 1 === a.scrollTop-- ? a : document.body
    }
    b = a.scrollTop;
    0 >= e || ("object" === typeof b && (b = b.offsetTop),
    "object" === typeof c && (c = c.offsetTop), function (a, b, c, f, d, e, h) {
        function g() {
            0 > f || 1 < f || 0 >= d ? a.scrollTop = c : (a.scrollTop = b - (b - c) * h(f),
                f += d * e, setTimeout(g, e))
        }

        g()
    }(a, b, c, 0, 1 / e, 20, d))
}

function easeOutCuaic(t) {
    t--;
    return t * t * t + 1;
}

const Header: FC = ({headerViewProgress, contactRef}) => {

    const executeScroll = () => contactRef
        && contactRef.current
        && scrollToRef(contactRef.current.offsetTop - 100, 1500)

    return (
        <>
            {
                headerViewProgress !== 1 &&
                <HeaderLinkFixed onClick={executeScroll}>Contact</HeaderLinkFixed>
            }
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