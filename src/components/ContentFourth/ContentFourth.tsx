import React, {FC} from 'react';
import contentFourth from "../../assets/images/ContentFourth.png";
import {Timeline, Tween} from "react-gsap";
import {Scene} from "react-scrollmagic";
import {ContentFourthBlock, ContentFourthImage, ContentFourthText} from "./ContentFourth.styled";

const ContentFourth: FC = ({currentProgress, nextProgress}) => {


    return (
        <ContentFourthBlock>
            <Tween
                position="0"
                from={{
                    yPercent: -50,
                }}
                to={{
                    yPercent: 0,
                }}
            >
                <ContentFourthImage src={contentFourth} alt=""/>
            </Tween>
            <ContentFourthText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </ContentFourthText>
        </ContentFourthBlock>
    )

}

export default ContentFourth;