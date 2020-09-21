import React, {FC, RefObject} from 'react';
import {Tween} from "react-gsap";
import {
    ContentFirstBlock,
    ContentFirstImage,
    ContentFirstImageBlock, ContentFirstImageBlockWall,
    ContentFirstText,
    ContentFirstTextBlock
} from "./ContentFirst.styled";
import contentFirst from "../../assets/images/ContentFirst.png";

interface IProps {
    currentProgress: number,
    contentFirstRef: RefObject<HTMLDivElement> | null
}

const ContentFirst: FC<IProps> = ({currentProgress, contentFirstRef}) => {
    return (
        <ContentFirstBlock
            style={{
                pointerEvents: currentProgress > 0 && currentProgress < 1 ? 'auto' : 'none',
            }}
            className={'content-first-animate'}
            ref={contentFirstRef}
        >
            <Tween
                from={{opacity: 0}}
                to={{opacity: 1}}
                paused
                totalProgress={currentProgress}
            >
                <ContentFirstTextBlock
                    className={'content-first-text-animate'}
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
                        className={'content-first-image-wall-animate'}
                    />
                    <ContentFirstImage
                        src={contentFirst}
                        className={'content-first-image-animate'}
                    />
                </ContentFirstImageBlock>
            </Tween>
        </ContentFirstBlock>
    )
}

export default ContentFirst;