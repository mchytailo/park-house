import React, {FC} from 'react';
import {
    ContentFirstBlock,
    ContentFirstImage,
    ContentFirstImageBlock,
    ContentFirstSection,
    ContentFirstText,
    ContentFirstTextBlock
} from "./ContentFirst.styled";
import contentFirst from "../../assets/images/ContentFirst.png";
import {Tween} from "react-gsap";

const ContentFirst: FC = ({currentProgress, nextProgress}) => {
    // console.log('progress', progress);
    return (
        <ContentFirstBlock>
            <Tween
                from={{opacity: 0}}
                to={{opacity: 1}}
                paused
                totalProgress={currentProgress}
            >
                <ContentFirstTextBlock
                    currentProgress={currentProgress}
                    nextProgress={nextProgress}
                >
                    <ContentFirstText>
                        Lorem ipsum dolor sit amet, consectetur
                    </ContentFirstText>
                </ContentFirstTextBlock>
            </Tween>
            <Tween
                from={{x: '150%', opacity: 0}}
                to={{x: '0%', opacity: 1}}
                paused
                totalProgress={currentProgress}
            >
                <ContentFirstImageBlock
                    currentProgress={currentProgress}
                    nextProgress={nextProgress}>
                    <ContentFirstImage src={contentFirst}/>
                </ContentFirstImageBlock>
            </Tween>

        </ContentFirstBlock>
    )

}

export default ContentFirst;