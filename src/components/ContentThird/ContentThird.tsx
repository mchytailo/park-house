import React, {FC} from 'react';
import {
    ContentThirdBlock,
    ContentThirdHeader, ContentThirdImageBlockWall,
    ContentThirdImageLeft,
    ContentThirdImageLeftBlock,
    ContentThirdImageRight,
    ContentThirdSection, ContentThirdSectionLeft,
    ContentThirdText,
    ContentThirdTextBlock
} from './ContentThird.styled';
import {Tween} from 'react-gsap';
import contentThird1 from '../../assets/images/ContentThird1.png';
import contentThird2 from './../../assets/images/ContentThird2.png';

const ContentThird: FC = ({currentProgress}) => {
    return (
        <ContentThirdBlock>
            <ContentThirdSectionLeft>
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