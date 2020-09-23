import React, {FC, useRef} from 'react';
import {Controller, Scene} from 'react-scrollmagic';
import {GlobalStyle} from '../styles/Global.styled';
import Main from "./Main/Main";
import {Timeline} from "react-gsap";
import ContentFirst from "./ContentFirst/ContentFirst";
import ContentSecond from "./ContentSecond/ContentSecond";
import ContentThird from "./ContentThird/ContentThird";
import ContentFourth from "./ContentFourth/ContentFourth";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import ContentBackground from "./ContentBackground/ContentBackground";

const App: FC = () => {
    const headerRef = useRef<HTMLDivElement>(null)
    const contentMainRef = useRef<HTMLDivElement>(null)
    const contentFirstRef = useRef<HTMLDivElement>(null)
    const contentSecondRef = useRef<HTMLDivElement>(null)
    const contactRef = useRef<HTMLDivElement>(null)
    const windowWidth = window.innerWidth;
    return (
        <>
            <Header
                headerRef={headerRef}
                contactRef={contactRef}
            />
            <div className={'scrollmagic-container'}>
                <GlobalStyle/>
                <Controller>
                    <Scene
                        duration={windowWidth > 991.98 ? '100%' :
                            windowWidth < 576 ? '85%' : '30%'}
                        triggerHook={'onLeave'}
                    >
                        {function (progress: number) {
                            return (
                                <div>
                                    <Main
                                        currentProgress={progress}
                                        contentMainRef={contentMainRef}
                                    />
                                </div>
                            );
                        }}
                    </Scene>

                    <Scene
                        triggerHook="onEnter"
                        duration="100%"
                    >
                        {function (progress: number) {
                            return (
                                <div style={{height: '100vh'}}>
                                    <ContentBackground
                                        currentProgress={progress}
                                        contentMainRef={contentMainRef}
                                        headerRef={headerRef}
                                    />
                                </div>
                            )
                        }}
                    </Scene>
                    <Scene
                        triggerHook="1"
                        duration="100%"
                        offset={windowWidth > 991 ? -300 : -200}
                        pin
                    >
                        {function (progress: number) {
                            return (
                                <div>
                                    <ContentFirst
                                        currentProgress={progress}
                                        contentFirstRef={contentFirstRef}
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
                            function (progress: number) {
                                return (
                                    <div>
                                        <ContentSecond
                                            currentProgress={progress}
                                            windowWidth={windowWidth}
                                            contentFirstRef={contentFirstRef}
                                            contentSecondRef={contentSecondRef}
                                        />
                                    </div>
                                )
                            }}
                    </Scene>
                    <div style={{height: windowWidth > 991.98 ? '1200px' : '800px'}}/>
                    <Scene
                        triggerHook="1"
                        offset={windowWidth > 991.98 ? 0 : -200}
                        duration={windowWidth > 991 ? '100%' : '70%'}
                    >
                        {function (progress: number) {
                            return (
                                <div style={{position: 'relative'}}>
                                    <ContentThird
                                        currentProgress={progress}
                                        windowWidth={windowWidth}
                                        contentSecondRef={contentSecondRef}
                                    />
                                </div>
                            )
                        }}
                    </Scene>
                    <div style={{height: windowWidth > 575 ? '200px' : '100px'}}/>
                    <Scene
                        duration="200%"
                        triggerHook="onEnter"
                    >
                        <Timeline>
                            <ContentFourth/>
                        </Timeline>
                    </Scene>
                    <Contact
                        contactRef={contactRef}
                        windowWidth={windowWidth}
                    />
                    <Footer/>
                </Controller>
            </div>
        </>
    );
}

export default App;