import React, {FC} from 'react';
import {
    ContentFirstBlock,
    ContentFirstImage,
    ContentFirstImageBlock, ContentFirstImageBlockWall,
    ContentFirstText,
    ContentFirstTextBlock
} from "./ContentFirst.styled";
import contentFirst from "../../assets/images/ContentFirst.png";
import {Tween} from "react-gsap";

const ContentFirst: FC = ({currentProgress, nextProgress}) => {
    console.log(currentProgress);
    return (
        <ContentFirstBlock
            style={{
                visibility: nextProgress < 1
                    ? 'visible'
                    : 'hidden'
            }}>
            <Tween
                from={{opacity: 0}}
                to={{opacity: 1}}
                paused
                totalProgress={currentProgress}
            >
                <ContentFirstTextBlock
                    style={{
                        opacity: currentProgress === 1
                            ? String(1 - nextProgress) + ' !important'
                            : ''
                    }}
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
                >
                    <ContentFirstImageBlockWall
                        style={{
                            left: currentProgress === 1 && nextProgress !== 1
                                ? String((1 - nextProgress) * 100) + '%'
                                : '',
                            opacity: currentProgress === 1 && nextProgress !== 1
                                ? String( nextProgress)
                                : ''
                        }}
                    />
                    <ContentFirstImage src={contentFirst}
                                       style={{
                                           opacity: currentProgress === 1
                                               ? String(1 - nextProgress)
                                               : ''
                                       }}
                    />
                </ContentFirstImageBlock>
            </Tween>

        </ContentFirstBlock>
    )

}

export default ContentFirst;