import React, {FC} from 'react';
import {
    ContentSecondBlock,
    ContentSecondImage,
    ContentSecondImageBlock, ContentSecondImageBlockWall,
    ContentSecondText,
    ContentSecondTextBlock
} from "./ContentSecond.styled";
import {Tween} from "react-gsap";
import contentSecond from "../../assets/images/ContentSecond.png";

const ContentSecond: FC = ({currentProgress, nextProgress}) => {
    return (
        <ContentSecondBlock
            style={{
                pointerEvents: currentProgress > 0 && currentProgress < 1 ? 'auto' : 'none'
            }}
        >
            <Tween
                from={{opacity: 0}}
                to={{opacity: 1}}
                paused
                totalProgress={currentProgress}
            >

                <ContentSecondImageBlock
                    style={{
                        opacity: currentProgress === 1
                            ? String(1 - nextProgress)
                            : '',
                        transform: currentProgress === 1
                            ? 'translateY(' + String(nextProgress * (-150)) + 'vh)'
                            : ''
                    }}
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
                from={{ opacity: 0}}
                to={{ opacity: 1}}
                paused
                totalProgress={currentProgress}
            >
                <ContentSecondTextBlock
                    style={{
                        opacity: currentProgress === 1
                            ? String(1 - nextProgress)
                            : '',
                        transform: currentProgress === 1
                            ? 'translateY(' + String(nextProgress * (-100)) + 'vh)'
                            : ''
                    }}
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