import React, {FC, useEffect} from 'react';
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

const ContentSecond: FC = ({currentProgress, windowWidth, contentFirstRef, contentSecondRef}) => {
    useEffect(() => {
        let contentBackgroundSection = document.getElementsByClassName('content-background-section')[0];

        let contentFirstBlock = contentFirstRef.current;
        let contentFirstText = contentFirstRef.current.getElementsByClassName('content-first-text-animate')[0];
        let contentFirstImageWall = contentFirstRef.current.getElementsByClassName('content-first-image-wall-animate')[0];
        let contentFirstImage = contentFirstRef.current.getElementsByClassName('content-first-image-animate')[0];
        if (currentProgress > 0) {
            if (windowWidth < 992) {
                contentFirstBlock.style.transform = 'translateX(-' + (currentProgress * 150) + 'px)'
            }
            contentFirstText.style.opacity = 1 - currentProgress
            contentFirstImageWall.style.left = String((1 - currentProgress) * 100) + '%';
            contentFirstImageWall.style.opacity = String(currentProgress)
            contentFirstImage.style.opacity = String(1 - currentProgress)
        } else if (currentProgress === 0) {
            contentFirstImageWall.style.opacity = 0;
        }
        if (currentProgress === 1) {
            contentFirstBlock.style.visibility = 'hidden'
            contentBackgroundSection.style.visibility = 'hidden';
        } else {
            contentFirstBlock.style.visibility = 'visible'
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
                    // style={{
                    //     opacity: currentProgress === 1
                    //         ? String(1 - nextProgress)
                    //         : '',
                    //     transform: currentProgress === 1
                    //         ? 'translateY(' + String(nextProgress * (windowWidth >= 992 ? -150 : -100)) + 'vh)'
                    //         : ''
                    // }}
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
                    // style={{
                    //     opacity: currentProgress === 1
                    //         ? String(1 - nextProgress)
                    //         : '',
                    //     transform: currentProgress === 1
                    //         ? 'translateY(' + String(nextProgress * (-100)) + 'vh)'
                    //         : ''
                    // }}

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