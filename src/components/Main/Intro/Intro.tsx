import React, {FC} from 'react';
import {MainSectionText, MainSectionTextLabel, MainSectionWrapper} from "../Main.styled";

const Intro: FC = () => {
    return (
        <MainSectionWrapper>
            <MainSectionText>
                Newport Beach residences designed for effortless living. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit. Aliquid eos et illum odit praesentium quod reiciendis soluta
                temporibus ut vero.
            </MainSectionText>
            <MainSectionTextLabel>Luxury condominium residences</MainSectionTextLabel>
            <MainSectionTextLabel>Starting from $1.9M</MainSectionTextLabel>
            <MainSectionTextLabel>Sales begin early 2021</MainSectionTextLabel>
        </MainSectionWrapper>
    )
}

export default Intro;