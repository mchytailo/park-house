import React, {FC} from 'react';
import logoIcon from '../../../assets/images/logoIcon.png'
import {MainSectionTextLabel} from "../Main.styled";
import {LogoIcon, LogoTextMain, LogoTextWrapper, LogoWrapper} from "./Logo.styled";

const Logo: FC = () => {
    return (
        <LogoWrapper>
            <LogoIcon src={logoIcon}/>
            <LogoTextWrapper>
                <LogoTextMain>PARKHOUSE</LogoTextMain>
                <MainSectionTextLabel>Residences at uptown newport</MainSectionTextLabel>
            </LogoTextWrapper>
        </LogoWrapper>
    )
}

export default Logo;