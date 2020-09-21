import React, {FC, RefObject, useEffect} from 'react';
import {
    ContentThirdBlock,
    ContentThirdBlockMobile,
    ContentThirdHeader,
    ContentThirdImageBlockWall,
    ContentThirdImageLeft,
    ContentThirdImageLeftBlock,
    ContentThirdImageRight,
    ContentThirdSection,
    ContentThirdSectionLeft,
    ContentThirdText,
    ContentThirdTextBlock
} from './ContentThird.styled';
import {Tween} from 'react-gsap';
import contentThird1 from '../../assets/images/ContentThird1.png';
import contentThird2 from './../../assets/images/ContentThird2.png';

interface IProps {
    currentProgress: number,
    contentSecondRef: RefObject<HTMLDivElement> | null,
    windowWidth: number,
}

const ContentThird: FC<IProps> = ({currentProgress, windowWidth, contentSecondRef}) => {
    useEffect(() => {
        if (contentSecondRef && contentSecondRef.current) {
            let contentSecondImage = contentSecondRef.current.getElementsByClassName('content-second-image-animate')[0] as HTMLElement;
            let contentSecondText = contentSecondRef.current.getElementsByClassName('content-second-text-animate')[0] as HTMLElement;

            if (currentProgress >= 0) {
                contentSecondImage.style.opacity = String(1 - currentProgress);
                contentSecondImage.style.transform = 'translateY(' + String(currentProgress * (windowWidth >= 992 ? -150 : -100)) + 'vh)';
                contentSecondText.style.opacity = String(1 - currentProgress);
                contentSecondText.style.transform = 'translateY(' + String(currentProgress * (-100)) + 'vh)'
            }
        }
    }, [currentProgress])
    return (
        <ContentThirdBlock>
            {
                windowWidth < 992 &&
                <ContentThirdBlockMobile>
                    <Tween
                        from={{opacity: 0}}
                        to={{opacity: 1}}
                        paused
                        totalProgress={currentProgress}
                    >
                        <ContentThirdImageLeftBlock>
                            <ContentThirdImageBlockWall
                                style={{
                                    left: currentProgress !== 1
                                        ? String((currentProgress) * 100) + '%'
                                        : ''
                                }}
                            />
                            <ContentThirdImageLeft src={contentThird1}/>
                        </ContentThirdImageLeftBlock>
                    </Tween>
                </ContentThirdBlockMobile>
            }
            <ContentThirdSectionLeft>
                {
                    windowWidth > 991 &&
                    <Tween
                        from={{opacity: 0}}
                        to={{opacity: 1}}
                        paused
                        totalProgress={currentProgress}
                    >
                        <ContentThirdImageLeftBlock>
                            <ContentThirdImageBlockWall
                                style={{
                                    left: currentProgress !== 1
                                        ? String((currentProgress) * 100) + '%'
                                        : ''
                                }}
                            />
                            <ContentThirdImageLeft src={contentThird1}/>
                        </ContentThirdImageLeftBlock>

                    </Tween>
                }

                <Tween
                    from={{opacity: 0}}
                    to={{opacity: 1}}
                    paused
                    totalProgress={currentProgress}
                >
                    <ContentThirdTextBlock>
                        <ContentThirdHeader>
                            Lorem ipsum dolor sit amet
                        </ContentThirdHeader>
                        <ContentThirdText>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
                            et justo duo dolores et ea rebum. Stet clita kasd gubergren.
                        </ContentThirdText>
                    </ContentThirdTextBlock>
                </Tween>

            </ContentThirdSectionLeft>
            <Tween
                from={{opacity: 0}}
                to={{opacity: 1}}
                paused
                totalProgress={currentProgress}
            >
                <ContentThirdSection>
                    <ContentThirdImageRight src={contentThird2}/>
                </ContentThirdSection>
            </Tween>

        </ContentThirdBlock>
    );

};

export default ContentThird;