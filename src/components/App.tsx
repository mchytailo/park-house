import React, {FC, useState} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {GlobalStyle} from '../styles/Global.styled';
import Main from "./Main/Main";
import MainBuilding from "./MainBuilding/MainBuilding";
import {ContentBackgroundSection} from "./ContentFirst/ContentFirst.styled";
import {Timeline} from "react-gsap";
import ContentFirst from "./ContentFirst/ContentFirst";
import ContentSecond from "./ContentSecond/ContentSecond";
import ContentThird from "./ContentThird/ContentThird";
import ContentFourth from "./ContentFourth/ContentFourth";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";

const App: FC = () => {
    const [contentSecondState, setContentSecondState] = useState(0)
    const [contentThirdState, setContentThirdState] = useState(0)
    const [contentMainState, setContentMainState] = useState(0)

    return (
        <div className={'scrollmagic-container'}>
            <GlobalStyle changeBackground={contentSecondState}/>
            <Controller>
                <Scene
                    duration={1000}
                    pin
                    triggerHook={'onLeave'}
                >
                    {progress => {
                        setContentMainState(progress)
                        return (
                            <div>
                                <Main progress={progress}/>
                            </div>
                        );
                    }}
                </Scene>
                <Scene pin={{ pushFollowers: false }}
                       triggerHook={'onLeave'}
                       duration={'90%'}
                >
                            <div>
                                <MainBuilding progress={contentMainState}/>
                            </div>
                </Scene>

                <Scene
                    triggerHook="onLeave"
                    pin
                >
                    {progress => {
                        return contentSecondState<1 && (
                            <div>
                                <ContentBackgroundSection
                                    progress={progress}
                                    nextProgress={contentSecondState}
                                />
                            </div>
                        ) || <div/>
                    }}
                </Scene>

                <Scene
                    triggerHook="0.99"
                    duration="100%"
                    pin
                >
                    {progress => {
                        return (
                            <div>
                                <ContentFirst
                                    currentProgress={progress}
                                    nextProgress={contentSecondState}
                                />
                            </div>
                        )
                    }}
                </Scene>

                <Scene
                    triggerHook="0.6"
                    duration="100%"
                    pin
                >
                    {
                        progress => {
                            setContentSecondState(progress);
                            return (
                                <div>
                                    <ContentSecond
                                        currentProgress={progress}
                                        nextProgress={contentThirdState}
                                    />
                                </div>
                            )
                        }}
                </Scene>
                <div style={{height: '1200px'}}/>
                <Scene
                    triggerHook="1"
                    duration={'100%'}
                >
                    {progress => {
                        setContentThirdState(progress);
                        return (
                            <div style={{position: 'relative'}}>
                                <ContentThird
                                    currentProgress={progress}
                                    nextProgress={contentThirdState}
                                />
                            </div>
                        )
                    }}
                </Scene>
                <div style={{height: '200px'}}/>
                <Scene
                    duration="200%"
                    triggerHook="onEnter"
                >
                    <Timeline>
                        <ContentFourth/>
                    </Timeline>
                </Scene>
                <Contact/>
                <Footer/>
            </Controller>
        </div>
    );
}

export default App;