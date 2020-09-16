import React, {FC} from 'react';
import {MainBackground, MainBuildingImg, MainSection, MainWrapper} from "./Main.styled";
import Logo from "./Logo/Logo";
import {Tween} from "react-gsap";
import Intro from "./Intro/Intro";
import contentImage from "../../assets/images/main-building.png";
import contentImage2 from "../../assets/images/main-building2.png";

const Main: FC = ({progress, nextProgress}) => {
    return (
        <MainWrapper>
            <MainSection
            style={{visibility: nextProgress < 1 ? 'visible' : 'hidden'}}

            >
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


            </MainSection>
            <MainBackground style={{
                position: progress === 1 && nextProgress < 1  ? 'fixed' : 'relative',
            }}>
                <MainBuildingImg
                    src={contentImage}
                    alt=""
                    style={{
                        opacity: String(1 - progress)
                    }}
                />
                <MainBuildingImg
                    src={contentImage2}
                    alt=""
                    style={{
                        opacity: String(progress)
                    }}
                />

            </MainBackground>

        </MainWrapper>)

}

export default Main;