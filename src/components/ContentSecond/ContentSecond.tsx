import React, {FC} from 'react';
import {
    ContentSecondBlock,
    ContentSecondImage,
    ContentSecondImageBlock,
    ContentSecondSection,
    ContentSecondText,
    ContentSecondTextBlock
} from "./ContentSecond.styled";
import {Tween} from "react-gsap";
import contentSecond from "../../assets/images/ContentSecond.png";
import {ContentFirstTextBlock} from "../ContentFirst/ContentFirst.styled";

const ContentSecond: FC = ({currentProgress, nextProgress}) => {
    // console.log('progress', progress);
    return (
        <ContentSecondBlock currentProgress={currentProgress} nextProgress={nextProgress}>
            <Tween
                from={{opacity: 0}}
                to={{opacity: 1}}
                paused
                totalProgress={currentProgress}
            >

                <ContentSecondImageBlock
                    currentProgress={currentProgress}
                    nextProgress={nextProgress}
                >
                    <ContentSecondImage src={contentSecond}/>
                </ContentSecondImageBlock>
            </Tween>
            <Tween
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                paused
                totalProgress={currentProgress}
            >
                <ContentSecondTextBlock
                    currentProgress={currentProgress}
                    nextProgress={nextProgress}
                >
                    <ContentSecondText>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    </ContentSecondText>
                </ContentSecondTextBlock>
            </Tween>

        </ContentSecondBlock>
    )

}

export default ContentSecond;