import React, {FC} from 'react';
import {Tween} from "react-gsap";
import {
    ContentFirstBlock,
    ContentFirstImage,
    ContentFirstImageBlock, ContentFirstImageBlockWall,
    ContentFirstText,
    ContentFirstTextBlock
} from "./ContentFirst.styled";
import contentFirst from "../../assets/images/ContentFirst.png";

const ContentFirst: FC = ({currentProgress, nextProgress, windowWidth}) => {
    return (
        <ContentFirstBlock
            style={{
                visibility: nextProgress < 1
                    ? 'visible'
                    : 'hidden',
                pointerEvents: currentProgress > 0 && currentProgress < 1 ? 'auto' : 'none',
                transform: nextProgress < 1 && windowWidth < 992
                    ? ('translateX(-' + (nextProgress * 150) + 'px)')
                    : ''
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
                            ? String(1 - nextProgress)
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
                                ? String(nextProgress)
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