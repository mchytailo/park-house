import React, {FC} from 'react';
import {StyledParalaxImage, ParalaxImageWrapper} from "./ParallaxImage.styled";

const ParallaxImage: FC = ({parallaxImage}) => {
    return (
            <ParalaxImageWrapper className="section section-2">
                <StyledParalaxImage parallaxImage={parallaxImage} src={'https://picsum.photos/100/1000'} alt=""/>
            </ParalaxImageWrapper>
    )
}

export default ParallaxImage;
