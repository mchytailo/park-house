import React, {FC, RefObject, useEffect} from 'react';
import {
    ContentSecondBlock,
    ContentSecondImage,
    ContentSecondImageBlock,
    ContentSecondImageBlockWall,
    ContentSecondText,
    ContentSecondTextBlock
} from "./ContentSecond.styled";
import {Tween} from "react-gsap";
import contentSecond from "../../assets/images/ContentSecond.png";

interface IProps {
    currentProgress: number,
    contentFirstRef: RefObject<HTMLDivElement> | null,
    contentSecondRef: RefObject<HTMLDivElement> | null,
    windowWidth: number,
}

const ContentSecond: FC<IProps> = ({currentProgress, windowWidth, contentFirstRef, contentSecondRef}) => {
    useEffect(() => {
        let contentBackgroundSection = document.getElementsByClassName('content-background-section')[0] as HTMLElement;

        let contentFirstBlock = contentFirstRef && contentFirstRef.current || null;
        if (contentFirstBlock) {
            let contentFirstText = contentFirstBlock && contentFirstBlock.getElementsByClassName('content-first-text-animate')[0] as HTMLElement;
            let contentFirstImageWall = contentFirstBlock.getElementsByClassName('content-first-image-wall-animate')[0] as HTMLElement;
            let contentFirstImage = contentFirstBlock.getElementsByClassName('content-first-image-animate')[0] as HTMLElement;
            if (currentProgress > 0) {
                if (windowWidth < 992) {
                    contentFirstBlock.style.transform = 'translateX(-' + (currentProgress * 150) + 'px)'
                }
                contentFirstText.style.opacity = String(1 - currentProgress)
                contentFirstImageWall.style.left = String((1 - currentProgress) * 100) + '%';
                contentFirstImageWall.style.opacity = String(currentProgress)
                contentFirstImage.style.opacity = String(1 - currentProgress)
            } else if (currentProgress === 0) {
                contentFirstImageWall.style.opacity = '0';
            }
            if (currentProgress === 1) {
                contentFirstBlock.style.visibility = 'hidden'
            } else {
                contentFirstBlock.style.visibility = 'visible'
            }
        }

        if (currentProgress === 1) {
            contentBackgroundSection.style.visibility = 'hidden';
        } else {
            contentBackgroundSection.style.visibility = 'visible';
        }
    }, [currentProgress])
    return (
        <ContentSecondBlock
            style={{
                pointerEvents: currentProgress > 0 && currentProgress < 1 ? 'auto' : 'none',
                visibility: currentProgress > 0 ? 'visible' : 'hidden',
                transform: windowWidth < 992
                    ? ('translateX(' + ((1 - currentProgress) * 100) + 'px)')
                    : ''
            }}
            ref={contentSecondRef}
        >
            <Tween
                from={{opacity: 0}}
                to={{opacity: 1}}
                paused
                totalProgress={currentProgress}
            >

                <ContentSecondImageBlock
                    className={'content-second-image-animate'}
                >
                    <ContentSecondImageBlockWall
                        style={{
                            right: currentProgress !== 1
                                ? String((currentProgress) * 100) + '%'
                                : ''
                        }}
                    />
                    <ContentSecondImage src={contentSecond}/>
                </ContentSecondImageBlock>
            </Tween>
            <Tween
                from={{opacity: 0}}
                to={{opacity: 1}}
                paused
                totalProgress={currentProgress}
            >
                <ContentSecondTextBlock
                    className={'content-second-text-animate'}
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