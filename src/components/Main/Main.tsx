import React, {FC} from 'react';
import {MainSection} from "./Main.styled";
import Logo from "./Logo/Logo";
import {Tween} from "react-gsap";
import Intro from "./Intro/Intro";

const Main: FC = ({progress}) => {
    return (
        <MainSection>
            <Tween
                from={{opacity: 1}}
                to={{opacity: 0}}
                paused
                totalProgress={progress}
            >
                <div>
                    <Logo/>
                </div>
            </Tween>

            <Tween
                from={{
                    opacity: 1,
                    marginLeft: 0
                }}
                to={{
                    opacity: 0,
                    marginLeft: '-40vw'
                }}
                paused
                totalProgress={progress}
            >
                <div>
                    <Intro/>
                </div>
            </Tween>


        </MainSection>)

}

export default Main;