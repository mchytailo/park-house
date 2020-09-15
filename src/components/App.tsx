import React, {FC, useRef, useState} from 'react';
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
import Header from "./Header/Header";

const App: FC = () => {
    const [contentSecondState, setContentSecondState] = useState(0)
    const [contentThirdState, setContentThirdState] = useState(0)
    const [contentMainState, setContentMainState] = useState(0)
    const [headerViewProgress, setHeaderViewProgress] = useState(0)
    const contactRef = useRef(null)

    const windowWidth = window.innerWidth;

    return (
        <>
            <Header headerViewProgress={headerViewProgress} contactRef={contactRef}/>
            <div className={'scrollmagic-container'}>
                <GlobalStyle changeBackground={contentSecondState}/>

                <Controller>
                    <Scene
                        duration={windowWidth > 991.98 ? '100%' : '30%'}
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
                    <Scene pin={{pushFollowers: false}}
                           triggerHook={'onLeave'}
                           duration={windowWidth > 991.98 ? '100%' : '30%'}
                    >
                        <div>
                            <MainBuilding
                                progress={contentMainState}
                                nextProgress={contentSecondState}
                            />
                        </div>
                    </Scene>

                    <Scene
                        triggerHook="onEnter"
                        duration="100%"
                    >
                        {progress => {
                            setHeaderViewProgress(progress);
                            return (
                                <div style={{height: '100vh'}}>
                                    {contentSecondState < 1 &&
                                    <ContentBackgroundSection
                                        style={{
                                            position: progress === 1 ? 'fixed' : 'relative'
                                        }}
                                    />}
                                </div>
                            )
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
                    <Contact  contactRef={contactRef}/>
                    <Footer/>
                </Controller>
            </div>
        </>
    );
}

export default App;