import React, {FC, useEffect, useState} from 'react';
import Logo from "./Logo/Logo";
import Intro from "./Intro/Intro";
import {MainSection} from "./Main.styled";
import ParallaxImage from "./ParallaxImage/ParallaxImage";

const Main: FC = ({fullpageState}) => {
    const [parallaxImage, setParallaxImage] = useState(false);
    const {direction, destination, origin} = fullpageState;
    useEffect(() => {
        if (direction === "down" && destination.index > 1) {
            setParallaxImage(true)
        } else if (direction === "up" && destination.index === 0) {
            setParallaxImage(false)
        }
    }, [direction, destination, origin])
    return (
        <>
            <div className="section section-1">
                <MainSection>
                    <Logo/>
                    <Intro/>
                </MainSection>
            </div>
            <ParallaxImage parallaxImage={parallaxImage}/>
        </>
    )
}

export default Main;